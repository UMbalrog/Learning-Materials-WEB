const express=require("express");
var rout=express.Router();

rout.get("/two",function(req,res,next){
	res.render("two",{
		data:"222222222222222222222"
	})
});

module.exports=rout;