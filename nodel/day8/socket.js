const fs=require("fs");
const http=require("http");
const socket=require("socket.io");

var ser=http.createServer(function(req,res){
	//这里在地址中加req.url才可以在浏览器地址栏中直接打入网址
	fs.readFile("./"+req.url,function(err,data){
		res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
		res.write(data);
	})
	console.log("有人访问了");
}).listen(7000);
console.log("listen7000.....");

socket.listen(ser).on("connection",function(socket){
	socket.emit("aaa","hello world");
	socket.on("eee",function(data){
		console.log(data);
	})
})

