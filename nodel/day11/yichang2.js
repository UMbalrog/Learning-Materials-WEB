const domain=require("domain");
const events=require("events");
var d=domain.create();//创建一个域;
var e = new events.EventEmitter();
//console.log(e);
function dat(){
	e.on("data",function(){
		throw new Error('data Error');
	});
}

var time=setTimeout(function(){
	e.emit("data");
},10);

d.add(e);	//单独写d.run(dat)时，他检测不到报错，因为域中没有触发事件，也没有events对象，所以这里要将e与触发事件传进去
d.add(time);  
d.run(dat);  
d.on("error",function(err){
	console.log("出错了");
	console.log(err)
})
