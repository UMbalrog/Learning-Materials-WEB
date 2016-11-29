var fork=require("child_process").fork; //写入子进程

var appsPath=["./child1.js","./child2.js"];

var workers={};

function createworks(path){

	var worker=fork(path); //这里相当于require("child_process").fork()创建子进程

	console.log("create pid: "+worker.pid);
	workers[worker.pid]=worker;

	worker.on("exit",function(){
		console.log("create pid: "+worker.pid);
		delete workers[worker.pid];
		createworks(path); //重启
	});
	//console.log(workers);
}
for(var i=0; i<appsPath.length; i++){
	createworks(appsPath[i]);
}

process.on("exit",function(){
	console.log("exit");
	for(var j in workers){
		workers[j].kill();
	}
});
process.exit();