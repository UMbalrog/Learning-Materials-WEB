const express = require("express");
const http = require("http");
const ejs = require("ejs");
const socket = require("socket.io");
var app = express();

var server = http.createServer(app);

server.listen(3000,function(){
	console.log("3000..");
})

app.set("views",__dirname+"/views/");
app.set("view engine","ejs");

app.use(express.static("./public"));

var io1 = socket.listen(server);
io1.on("connection",function(soc){
	console.log("con......")
	soc.on("coming",function(data) {
		console.log(data);
	})

})
