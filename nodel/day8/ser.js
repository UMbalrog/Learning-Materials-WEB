var fs=require("fs");
var http=require("http");
var socketio=require("socket.io");

var ser=http.createServer(function(req,res){
	fs.readFile("./"+req.url,function(err,data){
		   res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
		   res.write(data);
	});
}).listen(800);
console.log("listen800....")

socketio.listen(ser).on("connection",function(socket){
	socket.emit("aaa","hello client");
	socket.on("eee",function(data){
		console.log(data);
	})
	
});