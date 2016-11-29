const http=require("http");
const fs=require("fs");

var server=http.createServer(function(req,res){
	fs.readFile("./html/index.html",function(err,data){
		res.end(data);
	})
	console.log("有人了");
})
server.listen(3001);
console.log("listen3001....");