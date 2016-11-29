const express=require("express");
const ejs=require("ejs");
var app=express();

app.use(express.static("./public"));
app.set("views",__dirname+"/views/");
app.set("view engine","ejs");

app.get("/ff",function(req,res,next){
	res.render("form");
	//console.log("111")
});

app.listen(3011,function(){
	console.log("3011.........");
})