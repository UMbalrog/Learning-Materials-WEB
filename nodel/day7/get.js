const http=require("http");
const fs=require("fs");
const path=require("path");
const url=require("url");
const querystring=require("querystring");
var pathname=null;

var server=http.createServer(function(req,res){
	//console.log();
	pathname=url.parse(req.url,true).pathname;
	console.log(url.parse(req.url,true));

	if(pathname=="/std")
	{	//get提交

		var num=(url.parse(req.url,true)).query;
		res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
		res.write("这是第"+num.on+"页面");

	}else if(pathname=="/dopost")

	{ 	//post提交

		var str="";
		req.on("data",function(chunk){
			str+=chunk;
		});
		req.on("end",function(){
			var obj=querystring.parse(str);
			res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
			res.write("您好"+obj.usename+"你的邮箱是"+obj.email)
		});
	}else{

		//正常读取页面
		if(req.url=="/"){ //如果没有输入页面就有默认的页面
			pathname="./publus/index.html";
		}else{
			pathname=path.join("./publus"+req.url);
		}
		
		var extname=path.extname(pathname);
		fs.readFile(pathname,function(err,data){
			if(err){
				console.log(err);
			}else{
				var Mine=getMine(extname);
				res.writeHead(200,{"Content-type":Mine});
				res.write(data);
			}
		})
	}
	console.log("有人访问了");

})
function getMine(name){
	switch(name){
		case ".html":
			return "text/html;charset='utf-8'";
			break;
		case ".png":
			return "image/png";
			break;
		case ".jpg":
			return "image/jpeg";
			break;
		case ".gif":
			return "image/gif";
			break;

	}
}
server.listen(3000);
console.log("listen3000....");