var cluster=require("cluster");

if(cluster.isMaster){
	var work;
	function list(){
		work=cluster.fork();
		console.log("work.id: "+work.id);

	};
	list();
	setTimeout(function(){
		work.kill();
	},1000);
	work.on("exit",function(){
		console.log("exit");
		list();
	})
	
}else{
	require("./child1.js");
}