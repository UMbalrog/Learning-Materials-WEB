const fs=require("fs");
const iconv=require("iconv-lite");// 引出编译模块
//移除dom读取
fs.readFile("./hello.txt",function(err,data){
	if(err){
		console.log(err);
	}else{
		//console.log(data.toString());
		if(data[0]==0xef && data[1]==0xbb && data[2]==0xbf){
			bin=data.slice(3);
			console.log(bin.toString());
		}
		
	}
})