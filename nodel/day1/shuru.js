console.log("请输入一句话");
process.stdin.on("data",(data)=>{ //给stdin挂一个函数“data”事件，发生data事件时执行这个函数
	data=(data.toString()).trim();
	if(data=="laoxu"){
		console.log("你太好了");
	}else{
		console.log("您好"+data);
	}
})
console.log("下一句");