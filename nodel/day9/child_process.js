//child_process //子进程模块儿
//cluster  多进程模块化
const child_process=require("child_process");
const cluster=require("cluster");
const util=require("util");
const os=require("os");

//console.log(child_process);
//复制文件
function copy(source,target,callback){
	var cp=util.format("xcopy /S",source,target);//拼接命令行指令
	child_process.exec(cp,callback); //向命令行输出参数cp就是参数
}
copy("a","b",function(err){
	console.log(err);
})
//读取目录
/*var options={encoding:'utf-8',maxBuffer:10*10}//这里可以设定条件
var cat=child_process.exec("dir",options,function(err,stdout,stderr){
	console.log(stdout);
});

//启动一个线程
var cat=child_process.spawn('node',["c.js"]);

cat.stdout.on("data",function(chunk){
	console.log(chunk.toString());
})
cat.on("exit",function(){
	console.log("end end");
})
cat.stdin.write("start");
cat.stdin.end();
*/
//console.log(cluster);
//console.log(os.cpus().length);

/*var cl=os.cpus().length;
var i=0;
if(cluster.isMaster){
	i++;
	for(var j=0;j<cl;j++){
		cluster.fork();
	}
	console.log("num... ... ..."+i);
}else{
	i++
	//console.log(cluster.worker.id) //每个进程都有自己的ID
	console.log("num... ... ..."+i+"  id"+cluster.worker.id);
}*/
