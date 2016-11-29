const express=require("express");
var rout=express.Router();

rout.post("/userlist",function(req,res,next){
	res.send("hello");//发送过去客户端
	res.json(json);//可穿json
})

module.exports=rout;
