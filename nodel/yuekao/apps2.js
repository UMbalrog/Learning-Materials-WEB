//创建1个子进程并建立服务器将所有文件内容在这里输出
const http = require("http");
const cluster = require("cluster");
const path = require("path");
const fs = require("fs");
const os = require("os");
//cpu的内核数
var len = os.cpus().length;
var dir = "./app";
if(cluster.isMaster) {
	console.log("cpu的内核数为"+len);
	var str = "";
	//读取文件夹中的所有文件
	function list(dir, callback, finish) {
		fs.readdir(dir, function (err, files) {
			if(err) {
				console.log(err);
			} else {
				(function next(i) {
					if(i < files.length) {
						var pathnames = path.join(dir, files[i]);
						fs.stat(pathnames, function (err, states) {
							if(err) {
								console.log(err);
							} else {
								if(states.isDirectory()) {
									//console.log(pathnames);
									list(pathnames, callback, function() {
										next(i + 1);
									})
								} else {
									callback(pathnames, function (){
										next(i + 1);
									})
								}
							}
						})
					} else {
						finish && finish();
					}
				})(0)
			}
		})
	}
	var work = cluster.fork();
	function mycallback(pathnames, fun){
		fs.readFile(pathnames, function (err, filess) {
			if(err) {
				console.log(err);
			} else {
				str += filess.toString();
				//将之前的子进程杀掉，使整个程序只有一个子进程
				work.kill();	
				work = cluster.fork();
				work.send({mes:str})
			}
		})
		console.log(pathnames);
		fun && fun();
	}
	function myfinish(){
		console.log("完成");
	}
	list(dir,mycallback,myfinish)

} else {
	//子进程中创建一个服务器
	console.log("this is zijincheng");
	process.on("message", function (data) {		
		console.log(data.mes);
		server(data.mes);
	})
	function server(dat){
		http.createServer(function (request, response) {
			response.end(dat);
		}).listen(4000)
		console.log(4000);
	}
	
}

