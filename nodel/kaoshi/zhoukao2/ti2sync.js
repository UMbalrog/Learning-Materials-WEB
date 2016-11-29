//同步异常
const domain=require("domain");
var d=domain.create();
var timer;
function sync(){
	var num=Math.random()*20;
	if(num<10){
		throw new Error("this num is.."+num);
	}
	console.log(num);
}

d.on("error",function(err){
	console.log(err);
	clearInterval(timer);
	timer=setInterval(list,1000);

})

function list(){
	d.run(sync);
}

timer=setInterval(list,1000);


