const fs=require("fs");
const http=require("http");
const cluster=require("cluster");
const path=require("path");
var dir="./html";
	if(cluster.isMaster){
	console.log("this is Master exe");
	//异步读取目录
		(function list(dir,callback,finish){
			fs.readdir(dir,function(err,files){
				if(err){
					console.log(err);
				}else{
					(function next(i){
						if(i<files.length){
							var pathname=path.join(dir,files[i]);
							fs.stat(pathname,function(err,state){
								if(state.isDirectory()){
									//console.log(pathname);
									list(pathname,callback,function(){
										next(i+1);
									})
								}else{
									callback(pathname,function(){
										next(i+1);
									})
								}
							})
						}else{
							finish && finish()
						}
					})(0)
				}
			})
		})(dir,Mycallback,Myfinish)
		//console.log(datas(dir));
		function Myfinish(){
			console.log("ok");
		}
		function Mycallback(name,func){
			//console.log(name);
			//在callback回调函数中调用clust函数来建立子进程
			var worker;
			function Clust(names){
				worker=cluster.fork();
				worker.send({mesg:names,pid:worker.id})
			}
			Clust(name);
			//子进程守护
			worker.on("exit",function(){
				console.log("exit");
				Clust(name);
			})

			func && func();
		}
		//Clust("./html/a.html");
	}else{
		console.log("num.....");
		//每个子进程启动一个服务器
		process.on("message",function(data){
			console.log(data.pid);
			var ser=http.createServer(function(req,res){
				fs.readFile(data.mesg,function(err,data){
					res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
					res.end(data);
				})
			}).listen(7000+data.pid);
			console.log(7000+data.pid);
		})
	}



