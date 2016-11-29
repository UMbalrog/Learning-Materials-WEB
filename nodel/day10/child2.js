var http=require("http");
http.createServer(function(req,res){
	res.end("this is child222");
}).listen(8082);

