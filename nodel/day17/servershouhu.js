var cp = require('child_process');
var worker;
function spawn(server, config) { 
	worker = cp.spawn('node', [ server, config ]); 
	worker.on('exit', function (code) { 
		if (code !== 0) { 
			spawn(server, config); 
		} 
	}); 
}
function main(argv) { 
	spawn('server.js', argv[0]); 
	process.on('SIGTERM', function () { //sigterm 终止进程，终止程序
		worker.kill(); 
		process.exit(0); 
	}); 
}
main(process.argv.slice(2));

function main(argv) { 
	/*var config = JSON.parse(fs.readFileSync(argv[0], 'utf-8')), 
	root = config.root || '.', 
	port = config.port || 80, 
	server;*/
	server = http.createServer(function (request, response) {
	 ... 
	}).listen(port);

	process.on('SIGTERM', function () { 
		server.close(function () { 
			process.exit(0); 
		}); 
	});
}
