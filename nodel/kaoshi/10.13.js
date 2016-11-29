process.stdin.setEncoding("utf-8");
process.stdin.on("readable",()=>{
	console.log("函数内部");
	chunk=process.stdin.read();
	if(typeof chunk === "string"){
		chunk=chunk.slice(0,-2);
		//console.log(chunk);
	}
	if(chunk === ""){
		process.stdin.emit("end");
	}
	if(chunk !== null){
		process.stdout.write("data:"+chunk.toString());
		console.log("");
	}
})
process.stdin.on("end",function(){
	console.log("end");
	process.stdin.end();
})