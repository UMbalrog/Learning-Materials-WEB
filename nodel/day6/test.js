//异步读取目录
const fs=require("fs");
const path=require("path");

var dir="./node_modules";

function list(dir,callback,finish){
	fs.readdir(dir,function(err,files){
		if(err){
			console.log(err);
		}else{
			(function next(i){
				if(i<files.length){
					var pathname=path.join(dir,files[i]);
					fs.stat(pathname,function(err,states){
						if(states.isDirectory()){
							console.log(pathname);
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
					finish && finish();
				}
			})(0)
		}

	})
}
function myCallback(pathname,fun){
	console.log(pathname);
	fun && fun();
}
function myFinish(){
	console.log("ok");
}
list(dir,myCallback,myFinish);


//同步读取目录
/*const fs=require("fs");
const path=require("path");

var dir="./node_modules";

function list(dir,callback){
	fs.readdirSync(dir).forEach(function(file){
		var pathname=path.join(dir,file);
		if(fs.statSync(pathname).isDirectory()){
			console.log(pathname);
			list(pathname,callback);
		}else{
			callback(pathname);
		}
	})
}
list(dir,function(pathname){
	console.log(pathname);
})*/