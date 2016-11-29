const fs=require("fs");
const path=require("path");
//同步读取目录
//var dir=fs.readdirSync("../../nodel"); //打印文件夹目录

var dir="./node_modules";

function list(dir,callback){
	fs.readdirSync(dir).forEach(function(file){ //这里用foreach遍历
		//这个是运用递归，先序遍历，深度优先

		var filename=path.join(dir,file);//path拼接目录

		if(fs.statSync(filename).isDirectory()){  //isDirectory判断是否是目录
			console.log(filename);
			list(filename,callback);
		}else{
			callback(filename);
		}
	})
}

list(dir,function(filename){
	console.log(filename);
})



