const cluster=require("cluster");
const fs=require("fs");

var arr=["./child1.js","./child2.js"];
if(cluster.isMaster){
	function creates(dat){
		var work=cluster.fork();
		work.send({mes:dat})
		work.on("exit",function(){
			work.kill();
			creates(dat);
		})
	}
	for(var i=0;i<arr.length;i++){
		creates(arr[i]);
	}
}else{
	console.log("this is child....")
	process.on("message",function(mes){
		require(mes.mes);
	})
	
}