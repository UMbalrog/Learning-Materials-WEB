const http=require("http");
const fs=require("fs");
const path=require("path");

var server=http.createServer(function(req,res){
	//console.log();
	if(req.url=="/"){
		var pathname="./publus/index.html";
	}else{
		var pathname=path.join("./publus"+req.url);
	}
	
	var extname=path.extname(pathname);
	fs.readFile(pathname,function(err,data){
		if(err){
			console.log(err);
		}else{
			//获取传入文件的扩展名所对应的表头文件
			var Mine=getMine(extname);
			res.writeHead(200,{"Content-type":Mine});
			res.write(data);
		}
	})
	console.log("有人访问了");

})
function getMine(name){
	fs.readFile("./mime.json",function(err,data){
		var obj=eval("("+data.toString()+")");
		return obj[name];
	})


	/*switch(name){
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
	}*/
}
server.listen(3000);
console.log("listen3000....");