const express=require("express");
var rout=express.Router();

rout.post("/loginss",function(req,res,next){
	if(req.body.usename != "admin" || req.body.password != "1234"){
		res.redirect("/login");	//重定向请求
	}else{
		res.redirect("/");
	}


	res.send("账号为"+req.body.usename+"密码为"+req.body.password);
})

module.exports=rout;
