const fs=require("fs");
const iconv=require("iconv-lite");// 引出编译模块
//转换为GBK编码类型输出
fs.readFile("./a.txt",function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(iconv.decode(data,"GBK"));//decode转换数据类型
	}
})