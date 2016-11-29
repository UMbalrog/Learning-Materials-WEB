//console.log(process);
/*var num=["1213","23","434"];
var str=num.slice(0,-1);
console.log(str);*/

/*console.log(process.pid);  //node 的 ID
console.log(process.title);	
console.log(process.version);
console.log(process.cwd() == __dirname);
console.log(process.argv); //系统数组
process.stdout:  //指向标准输出;
process.stderr:  //指向错误输出;
process.stdin:*/ //指向标准输入;



/*process.stdin.setEncoding("utf8");
process.stdin.on("readable",function(){
	console.log("函数内部");
	var chunk=process.stdin.read();
	//console.log(chunk);
	if(typeof chunk === "string"){
		chunk=chunk.slice(0,-2);
	}
	if(chunk === ""){
		process.stdin.emit("end");
		return;
	}
	if(chunk!==null){
		console.log("data:"+chunk.toString());
	}
})
process.stdin.on("end",function(){
	console.log("end");
})
process.on("exit",function(){
	console.log("exit");
})*/




//process.nextTick(); 将代码放在事件循环的前面
/*console.time("one");
function a(data){
	console.log(data);
}
function doa(arg,cb){
	for(var i=0;i<200;i++){
		a(arg);
	}
	cb();
}
doa("a",function(){
	console.log("a");
})
console.timeEnd("one");

console.time("twe");
function b(data){
	console.log(data);
}
function dos(arg,cb){
	for(var i=0;i<200;i++){
		b(arg);
	}
	process.nextTick(cb());
}
dos("b",function(){
	console.log("b");
})
console.timeEnd("twe");*/