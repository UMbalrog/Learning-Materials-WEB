const zlib=require("zlib");
const http=require("http");
const fs=require("fs");

var server=http.createServer(function(req,res){

	var zlibfile=zlib.createGzip();
	var readfile=fs.createReadStream("./html/index.html");
	var targethtml=fs.createWriteStream("./html/base.html");
	
	var str="";
	req.on("data",function(chunk){
		str+=chunk;
	})
	req.on("end",function(){
		var str11=null;
		fs.writeFile("./json.txt",str,function(err){
			if(err){
				console.log(err);
			}else{
				//将另一个页面中的发送过来的数据压缩；
				str11=fs.createReadStream("./json.txt");
				console.log(str11);
				str11.pipe(zlibfile).pipe(targethtml);
			}
		})
		//res.end(str);
	});
	console.log("有人了");

})
server.listen(3000);
console.log("listen3000......")