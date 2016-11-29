const child_process=require("child_process");
const cluster=require("cluster");
const os=require("os");

//主线程与子线程之间的数据互传，用send()和on("message")发送和接收
console.time("one");
var cl=os.cpus().length;
var num=0;
if(cluster.isMaster){
	num++;
	for(var i=0;i<cl;i++){
		var prowork=cluster.fork();
		prowork.send({msg:"aaaa"});
		prowork.on("message",function(msg){
			console.log(msg);
		})
	}
	console.log("Master  ... ..."+num);
}else{
	num++;
	process.on("message",(msg)=>{
		console.log(msg);
	})
	process.send({msg:"bbbbbb"});
	console.log("id:"+cluster.worker.id+";;"+num);
}
console.timeEnd("one");


var child=child_process.fork("./child.js");
child.on("message",function(msg){
	console.log(msg);
})
child.send({msg:"world"});