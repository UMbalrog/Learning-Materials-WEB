const express=require("express");
var app=express();

app.get("/user",function(req,res,next){
	console.log(req.url);
	var json=[
		{name:"zhangsan"},
		{name:"lisi"}
	]
	//var newdata=(req.url.split("callback=")[1]).split("&_=")[0];
	//res.send(newdata+"("+JSON.stringify(json)+")");
	res.jsonp(json);

});

app.listen(3000,function(){
	console.log("3000.........");
})