const express=require("express");
var rout=express.Router();

rout.get("/pubbb",function(req,res,next){
	res.render("pubbb",{
		title:"pubbb.ejs",
		data:[
			{name:"HNgsan",age:20},
			{name:"HNgsan",age:20}
		]
	})
})

module.exports=rout;
