const domain=require("domain");
const events=require("events");
var d=domain.create();

function dat(){
	setTimeout(function(){
		var num=Math.random()*10;
		if(num<5){
			throw new Error("num is...."+num);
		}
		console.log(num);
		
	},10);
}

setInterval(function(){d.run(dat)},1000);

d.on("error",function(err){
	console.log(err);
})
