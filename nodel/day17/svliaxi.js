const http = require("http");
const fs = require("fs");
const path = require("path");

var MIME = { 
		'.css': 'text/css', 
		'.js': 'application/javascript' 
	};

function main() {
	var server = http.createServer(function(request,response) {
		//console.log(request.url);
		var geturls = geturl(request.url);
		datafiles(geturls.pathnames, function ( err, pathnames ) {
			if(err) {
				response.writeHead(404);
				response.end(err.message);
			} else {
				response.writeHead(200, {"Content-type":geturls.mime});
				//输出文件中的内容并且合并，这里吧response也传进去不然访问不到
				outdata(pathnames,response);
				//response.end();
			}
		})
	}).listen(3033);
	//守护进程的一部分，当程序正常退出时，关闭服务器
	process.on( "SIGTERM" ,function () {
		server.close( function () {
			process.exit(0);
		})
	})
}
main()
//输出数据函数
function outdata (pathnames,res) {
	(function next( i, len) {
		if( i < len ){
			console.log(pathnames[i]);
			var reader = fs.createReadStream(pathnames[i]);
			reader.pipe(res,{end:false});
			//{end:false}这个参数有加等的效果
			reader.on("end",function() {
				next( i+1, len)
			});
		} else {
			res.end();
		};

	})(0,pathnames.length )
}
//检测传入的文件是否为文件
function datafiles(pathnames,callback) {
	(function next(i,len) {
		if(i < len) {
			//这里输入时注意应该是数组中的每一个值，虽没有循环但next就是一个循环
			fs.stat( pathnames[i], function ( err, states ) {
				if(err) {
					callback(err);
				} else if( !states.isFile() ) {
					callback( new Error());
				} else {
					next( i+1, len);
				}
			})
		} else {
			callback ( null, pathnames );
		}
	})(0,pathnames.length)
}

//设置路径函数，判断出是什么类型文件，返回一个对象，里面有处理好的文件目录和对应表头
function geturl(url) {
	var paths,pathnames,base;
	//console.log(url);
	if(url.indexOf("??") === -1) {
		url=url.replace("/","/??")
	}
	paths = url.split("??");
	base = paths[0];
	pathnames = paths[1].split(",").map(function(v) {

		return path.join("."+base,v);
	})
	return {
		mime:MIME[path.extname(pathnames[0])],
		pathnames:pathnames
	}

}