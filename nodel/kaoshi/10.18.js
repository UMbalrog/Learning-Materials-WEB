const express=require("express");
var app=express();

var conf=require("./10.18.2.js");
app.use("/aaaa",conf);


app.listen(3000,function(){
	console.log("3000....")
})