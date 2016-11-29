const child_process = require("child_process");
const path = require("path");
const util = require("util");
const fs = require("fs");

//复制整个文件夹
fs.mkdir("./b",function(err){ //先创建一个文件夹
	if(err) {
		console.log(err);
	} else {
		copy("a","b",function(err){  //调用函数
			console.log(err);
		})
	}
})
function copy(source,target,callback){
	var cp=util.format("xcopy /S",source,target);//拼接命令行指令
	child_process.exec(cp,callback); //向命令行输出参数cp就是参数
}

/*function copyb(src,dst){ //src源文件，dst目标文件
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
copyb("./f1.txt","./abc/fs.txt");*/

//s e Q Y I
var dir="./a";
var target = "./b";
fs.mkdir(target,function(){
	//console.log("ok");
})
function list(dir,target,callback,finish){  
	fs.readdir(dir,function(err,files){
		(function next(i){ 
			if(i<files.length){
				var pathname = path.join(dir,files[i]);
				//创建的目录因为和path.join的不同所以也要在传一个单独的创建的路劲并且跟随读取一起下去
				var str1 = target+"/"+files[i];
				fs.stat(pathname,function(err,states){
					if(states.isDirectory()){
						fs.mkdir(str1,function(err){
							console.log(err);
						})
						//这里调用自己递归函数
						list(pathname,str1,callback,function(){	
							next(i+1);
						})
					}else{
						callback(pathname,str1,function(){
							next(i+1);
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

function myCallback(pathname,fil,fun){
	//console.log(pathname);
	var reader = fs.createReadStream(pathname);
	var writer = fs.createWriteStream(fil);
	reader.pipe(writer);
	fun && fun();
}

list(dir,target,myCallback,myFinish);
