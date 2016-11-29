const fs=require("fs");
//异步

//改写文件内容
/*fs.writeFile("./f1.txt","abcdefg",function(err){
	if(err){
		console.log(err);
	}else{
		console.log("write ok");
	}
})*/
//添加文件内容
fs.appendFile("./f1.txt","  abcdefg",function(err){
	if(err){
		console.log(err);
	}else{
		console.log("append ok");
	}
})
//读取文件内容
fs.readFile("./f1.txt",function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data.toString());
	}
})
console.log("this fs1 file");