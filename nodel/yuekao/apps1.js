//有几个文件创建几个子进程并建立相应的服务器
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
						console.log("11");
						finish && finish();
					}
				})(0)
			}
		})
	}
	function mycallback(pathnames, fun){
		var work = cluster.fork();
		console.log(work.id);
		fs.readFile(pathnames, function (err, filess) {
			if(err) {
				console.log(err);
			} else {
				work.send({mes:filess.toString(),ID:(work.id)})
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
	//每个子进程中创建一个服务器
	console.log("this is zijincheng");
	process.on("message", function (data) {
		http.createServer(function (request, response) {
			//console.log(data.mes);
			response.end(data.mes);
		}).listen(4000+data.ID)
		console.log(4000+data.ID);
	})

}
