const express=require("express");
const socket=require("socket.io");
const http=require("http");
var app=express();

app.use("/",express.static("./www"));//引入静态资源

var ser=http.createServer(app);//创建服务器链接
ser.listen(3001,function(){
	console.log("3001....");
})

socket.listen(ser).on("connection",function(sock){//socket监听服务器
	console.log("connect..")
	var us='';
	sock.on("mes",function(data){
		if(us==''){
			us=data;
			sock.emit("send","欢迎"+us+"进入聊天室");
			sock.broadcast.emit("send","欢迎"+us+"进入聊天室")
		}else{
			sock.emit("send",us+"说："+data);
			sock.broadcast.emit("send",us+"说："+data)
		}
		
		
	})
})

