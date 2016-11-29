const express=require("express");
const ejs=require("ejs");
var app=express();

app.set("views",__dirname+"/views/");
app.set("view engine","ejs");

app.get("/",function(req,res,next){
	res.render("form");
});

app.use(express.static("./public"));

app.listen(3000,function(){
	console.log("3000.......");
});