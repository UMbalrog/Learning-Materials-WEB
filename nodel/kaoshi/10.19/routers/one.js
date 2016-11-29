const express=require("express");
var rout=express.Router();

rout.get("/",function(req,res,next){
	res.render("one",{
		data:"11111111111111111111111111111"
	})
});

module.exports=rout;