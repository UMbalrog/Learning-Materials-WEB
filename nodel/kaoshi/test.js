const http = require("http");
const fs = require("fs");
const path = require("path");

var MIME = { 
		'.css': 'text/css', 
		'.js': 'application/javascript' 
	};

function main() {
	var server = http.createServer(function(request,res) {
		var geturls = geturl(request.url);

		(function next( i, len) {
			if( i < len ){
				//console.log(pathnames[i]);
				var reader = fs.createReadStream(geturls[i]);
				reader.pipe(res,{end:false});
				//{end:false}这个参数有加等的效果
				reader.on("end",function() {
					next( i+1, len)
				});
			} else {
				res.end();
			};

		})(0,geturls.length )

		
	}).listen(3033);
}
main()
//输出数据函数

//设置路径函数，判断出是什么类型文件，返回一个对象，里面有处理好的文件目录和对应表头
function geturl(url) {
	var paths,pathnames,base;
	console.log(url);
	if(url.indexOf("??") === -1) {
		url=url.replace("/","/??")
	}
	paths = url.split("??");
	base = paths[0];
	pathnames = paths[1].split(",").map(function(v) {

		return path.join("."+base,v);
	})
	return pathnames

}