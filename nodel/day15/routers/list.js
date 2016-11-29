const mysql=require("mysql");
const express=require("express");
var rout=express.Router();
var conf=require("./datab.js")(mysql);

rout.get("/",function(req,res,next){
	conf.query("select * from student where xh<?",[50],function(err,reslt){
		//console.log(reslt)
		res.render("list",{
			data:reslt
		})
	})
})

module.exports=rout;


