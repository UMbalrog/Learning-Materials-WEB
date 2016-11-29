const express=require("express");
var rou=express.Router();

rou.get("/first",function(req,res,next){
	console.log("this is first");
	next();
},function(req,res){
	console.log("this is first zhongjianjian");
});

rou.get("/two",function(req,res,next){
	next();
},function(req,res){
	console.log("this is two zhongjianjian");
});

rou.get("/three",function(req,res,next){
	next();
},function(req,res){
	console.log("this is three zhongjianjian");
});





module.exports=rou;