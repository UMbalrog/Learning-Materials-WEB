const http=require("http");
const url=require("url");

http.createServer(function(req,res){
	var str="";
	var num=url.parse(req.url,true).query;
	for(var i in num){
		str+=i+"=>"+num[i]+`
`;
	}
	res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
	res.write("这个一个网页"+req.url+str);
	console.log("有人访问了")
}).listen(3000);
console.log("listen3000....");