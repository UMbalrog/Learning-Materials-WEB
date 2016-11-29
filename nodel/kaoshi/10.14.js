const os=require("os");
const cluster=require("cluster");
const child_process=require("child_process");
//console.log(os.cpus().length);
var cpuLength=os.cpus().length;

/*if(cluster.isMaster){
	//console.log("this is Master exe");
	function forks(){
		var worker=cluster.fork();
		worker.send({msg:"hello world"}); //主进程与子进程互通数据
		worker.on("message",function(data){
			console.log(data.zmsg);
		})
	}

	for(var i=0; i<cpuLength; i++){
		forks();
	}
}else{
	//console.log("this is child exe");
	process.on("message",function(data){
		console.log(data.msg);
	})
	process.send({zmsg:"hai!"})

}*/
//机试已做完！

console.log("this is Master exe");
var appPath=["./child1.js"];
var appLength=appPath.length;
var workers={};

function childs(path){
	var worker=child_process.fork(path);
	//console.log(worker);
	workers[worker.pid]=worker;

	worker.on("exit",function(){
		//console.log(this.pid);
		delete workers[this.pid];
		console.log(workers);
		childs(path);
	})

}
for(var i=0;i<appLength;i++){
	childs(appPath[i]);
}

process.on("exit",function(){
	console.log("exit");
	for(var i in workers){
		workers[i].kill();
	}
})
	
process.exit();
