const express=require("express");
var rout=express.Router();

rout.get("/",function(req,res,next){
	res.render("index",{
		title:"index.ejs",
		data:[
			{name:"HNgsan",age:20},
			{name:"HNgsan",age:20}
		]
	})
});

module.exports=rout;
