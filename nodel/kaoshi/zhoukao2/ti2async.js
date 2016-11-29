//异步异常
const domain=require("domain");
var d=domain.create();

function async(){
	setTimeout(function(){
		var num=Math.random()*20;
		if(num<10){
			throw new Error("this num is.."+num);
		}
		console.log(num);
	},100)
}

function list(){
	d.run(async);
}

setInterval(list,1000);

d.on("error",function(err){
	console.log(err);
})
