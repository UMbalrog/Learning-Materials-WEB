var fs = require('fs'), 
	path = require('path'), 
	http = require('http');
var MIME = { 
		'.css': 'text/css', 
		'.js': 'application/javascript' 
	};

function combineFiles(pathnames, callback) { 
	var output = [];
	(function next(i, len) {
		if (i < len) { 
			fs.readFile(pathnames[i], function (err, data) { 
				if (err) { 
					callback(err); 
				} else { 
					output.push(data); 
					next(i + 1, len); 
				} 
			}); 
		} else { 
			callback(null, Buffer.concat(output)); //数组拼接
		} 
	}(0, pathnames.length));
}
function main(argv) { 
	/*var config = JSON.parse(fs.readFileSync(argv[0], 'utf-8')), 
		root = config.root || '.', 
		port = config.port || 3030;*/
	http.createServer(function (request, response) { 
		//response.end("hello");
		var urlInfo = parseURL(root, request.url);
		combineFiles(urlInfo.pathnames, function (err, data) {
			if (err) { 
				response.writeHead(404); 
				response.end(err.message); 
			} else { 
				response.writeHead(200, { 'Content-Type': urlInfo.mime }); 
				response.end(data); 
			}
		}); 
	}).listen(3030);
}
//处理目录
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
main(process.argv.slice(2));
