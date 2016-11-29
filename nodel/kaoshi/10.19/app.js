const express=require("express");
const ejs=require("ejs");
//const body_parser=require("body-parser");
var app=express();

app.set("views" , __dirname+"/views/");
app.set("view engine","ejs");

var one=require("./routers/one.js");
var two=require("./routers/two.js");
var three=require("./routers/three.js");


app.get("/",one);
app.get("/two",two);
app.get("/three",three);


app.listen(3000,function(){
	console.log("3000....");
})


