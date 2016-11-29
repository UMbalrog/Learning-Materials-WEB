const express = require("express");
const ios = require("socket.io");
const http = require("http");
var app = express();

app.use("/",express.static("./www"));

var server = http.createServer(app);
//这里是重点。一定是server。listen监听，这个是主服务器不是app监听
server.listen( 3000,function() {
	console.log( "3000..." );
})
//以上重点之前错了
var io11=ios.listen(server);
var users = [];
io11.on( "connection",function(socket) {
	console.log("connection......");
	socket.on( "login",function (names) {
		if(users.indexOf(names) === -1 ) {
			socket.userIndex = users.length;
			socket.username = names;
			users.push(names);
			io11.emit("res","欢迎" + names + "进入聊天室");
			io11.emit("xx",users);
			console.log(users);
		} else {
			socket.emit("yy","用户名已存在");
		}
	});

	socket.on( "img",function(message) {	//发送图片
		io11.emit("pic",socket.username,message);
	})

	socket.on( "face",function(data){
		io11.emit("faces",socket.username,data);
	})

	socket.on( "disconnect",function() { //退出检测
		users.splice(socket.userIndex,1);
		socket.broadcast.emit("xx",users); //人数发送处
	});

	socket.on( "chat",function(message) { //信息发送
		var da = new Date();	
		var strtime = da.toLocaleString();	//时间获取
		io11.emit( "ser",strtime+"&nbsp;&nbsp;"+socket.username+"说:</br>&nbsp;"+message );
		//socket.emit( "ser",datas+"说："+message) ;
		//socket.broadcast.emit( "ser",datas+"说："+message );	
		
	})
});


