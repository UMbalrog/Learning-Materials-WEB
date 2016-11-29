const fs=require("fs");
const path=require("path");
//异步读取目录
var dir="./node_modules";
function list(dir,callback,finish){  //这是大的递归函数
	fs.readdir(dir,function(err,files){
		(function next(i){ //next函数是执行本文件夹下的一个一个的文件，每一个文件夹下的文件都是从i=0开始；
			if(i<files.length){
				var pathname=path.join(dir,files[i]);
				fs.stat(pathname,function(err,states){		
					if(states.isDirectory()){
						console.log(pathname);
						//这里调用自己递归函数
						list(pathname,callback,function(){	
							next(i+1);//这里的next函数是上一层文件中的继续执行下一个文件。
						})
					}else{
						callback(pathname,function(){
							next(i+1);//这里next函数是在本文件下的文件传入下一个文件。
						})
					}
				})
			}else{
				finish && finish();
			}
		})(0)
	})
}
function myFinish(){
	console.log("OK");
}
function myCallback(pathname,fun){
	console.log(pathname);
	fun && fun();
}

list(dir,myCallback,myFinish);