const express=require("express");
var rout=express.Router();

rout.get("/list",function(req,res,next){
	res.render("list",{
		title:"list.ejs",
		data:[
			{name:"HNgsan",age:20},
			{name:"HNgsan",age:20}
		]
	})
})

module.exports=rout;
