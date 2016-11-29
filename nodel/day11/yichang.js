// 异常，同步与异步异常
const domain=require("domain");//检测
var d=domain.create();//创建一个域；

function sync_err(){
	var r=Math.random()*10;
	if(r>5){
		throw new Error("random: num ......"+r);
	}
	console.log(r);
}
function async_err(){
	setTimeout(function(){
		var r=Math.random()*10;
		if(r>5){
			throw new Error("random: num ......"+r);
		}
		console.log(r);
	},10);
}
setInterval(function(){
	try{
		//d.run(sync_err);
		d.run(async_err);
		//sync_err();
		//async_err();
	}catch(e){
		console.log(e);
	}
},1000);

d.on("error",function(err){  //在自己域中检测错误
	console.log(err)
})

//uncaughtException  全局的异常事件
/*process.on("uncaughtException",function(err){
	console.log(err);
})*/