const express=require("express");
var rout=express.Router();

rout.get("/login",function(req,res,next){
	res.render("login",{
		title:"login.ejs"
	})
})

module.exports=rout;
