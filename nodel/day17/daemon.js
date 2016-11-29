//svliaxi 的守护进程

const cp = require("child_process");

var work;
function spawn ( server ){
	work = cp.spawn ("node",[ server ]);
	
	work.on("exit",function(code){
		if( code !== 0){
			work.kill();
			spawn ( server );
		}
	})
}

function main () {
	spawn ( "./svliaxi.js" );
	process.on( "SIGTERM" , function () { //正常程序结束，传入0参数，停止进程守护
		work.kill();
		process.exit(0);
	}) 
}
main();