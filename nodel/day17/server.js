var fs = require('fs'), 
	path = require('path'), 
	http = require('http');
var MIME = { 
		'.css': 'text/css', 
		'.js': 'application/javascript' 
	};

function main() { 
	/*var config = JSON.parse(fs.readFileSync(argv[0], 'utf-8')), 
		root = config.root || '.', 
		port = config.port || 80;*/

	http.createServer(function (request, response) { 
		var urlInfo = parseURL(root, request.url);
		validateFiles(urlInfo.pathnames, function (err, pathnames) { 
			if (err) { 
				response.writeHead(404); 
				response.end(err.message); 
			} else { 
				response.writeHead(200, { 'Content-Type': urlInfo.mime }); 
				outputFiles(pathnames, response); 
			} 
		}); 
	}).listen(3030);
};

main();

function parseURL(root, url) { 
	var base, pathnames, parts;
	if (url.indexOf('??') === -1) { 
		url = url.replace('/', '/??'); 
	}
	parts = url.split('??'); 
	base = parts[0]; 

	pathnames = parts[1].split(',').map(function (value) { 
		return path.join(".", base, value); 
	});
	return { 
		mime: MIME[path.extname(pathnames[0])] || 'text/plain', 
		pathnames: pathnames 
	};
}
//输出文件内容利用数据流
function outputFiles(pathnames, writer) { 
	(function next(i, len) { 
		if (i < len) { 
			var reader = fs.createReadStream(pathnames[i]);

			reader.pipe(writer, { end: false }); //通道用法将读写出去

			reader.on('end', function() { 
				next(i + 1, len); 
			}); 
		} else { 
			writer.end(); 
		} 
	}(0, pathnames.length));
}
//判断其中有不是文件的就报错
function validateFiles(pathnames, callback) { 
	(function next(i, len) { 
		if (i < len) { 
			fs.stat(pathnames[i], function (err, stats) { 
				if (err) { 
					callback(err); 
				} else if (!stats.isFile()) { 
					callback(new Error()); 
				} else { 
					next(i + 1, len); 
				} 
			}); 
		} else { 
			callback(null, pathnames); 
		} 
	}(0, pathnames.length)); 
}
