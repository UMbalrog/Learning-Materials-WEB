const net=require("net");

//使用net建立一个不严谨的服务器
/*net.createServer(function(conn){
	conn.on("data",function(data){
		conn.write([
			"HTTP/1.1 200 OK",
			"Content-Type: text/plain",
			"Content-Length: 11",
			"",
			"Hello World"
		].join("\n"));
	});
	console.log("有人访问了。。")
}).listen(7000);*/

//net模块可用于创建Socket服务器或Socket客户端
var options={
	port:7000,
	host:"localhost"
};
var client=net.connect(options,function(){
	client.write([
		'GET / HTTP / 1.1',
		'User-Agent: cur1/7.26.0',
		'Host:localhost',
		'Accept:*/*',
		'',
		''
		].join("\n"));
	console.log("coming.....")
});
client.on("data",function(data){
	console.log(data.toString());
	client.end();
})
