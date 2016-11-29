const express=require("express");
var rout=express.Router();

rout.get("/three",function(req,res,next){
	res.render("three",{
		data:"33333333333333333"
	})
});

module.exports=rout;