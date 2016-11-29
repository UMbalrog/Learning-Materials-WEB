const mysql=require("mysql");
const express=require("express");
var rout=express.Router();
var conf=require("./datab.js")(mysql);

rout.post("/dopost",function(req,res,next){
	conf.query("select * from student where xm=? and nl=?",[req.body.xm,req.body.nl],function(err,reslt){
		
		if(reslt.length>0){
			res.send("dengle chengg");
		}else{
			res.send("shibai");
		}
	})
})

module.exports=rout;


