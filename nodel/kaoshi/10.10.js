const fs=require("fs");
const path=require("path");
var dir="D:/Nodejs/nodel/kaoshi/publus";
var sumstr="";
//方法一同步
/*function list(dir,callback){
	fs.readdirSync(dir).forEach(function(files){
		var pathname=path.join(dir,files);
		if(fs.statSync(pathname).isDirectory()){
			//console.log(pathname);
			list(pathname,callback);
		}else{
			callback(pathname,files);
		}
	})
}
list(dir,function(name,filename){
	//console.log(name);
	var extname=path.extname(name);
	if(extname==".css" || extname==".html"){
		var str="名称: "+filename+"/ ";
		str+="大小: "+bigs(name)+"B/ ";
		str+="目录: "+name+`
`;
		console.log(str);
		sumstr+=str;
	}
})
function bigs(name){
	return fs.statSync(name).size;
}
fs.writeFileSync("./js.json",sumstr);*/

//方法二异步
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
							//也可以放入callback回调函数中，把对应参数传入即可
							var extname=path.extname(pathname);
							if(extname==".css" || extname==".html"){
								var str="名称"+files[i]+"/ ";//这里i可以传进来因为这里的i是每次传进next的参数不是循环中的i++递增变量。
								str+="大小"+states.size+"B/ ";
								str+="目录"+pathname+`
`;
								sumstr+=str;
							}
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
function myCallback(name,fun){
	console.log(name);
	fun && fun();
}
function myFinish(){
	console.log("ok");
	fs.writeFileSync("./js2.json",sumstr);
}
list(dir,myCallback,myFinish)


