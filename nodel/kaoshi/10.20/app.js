const express=require("express");
const ejs=require("ejs");
const bodyparser=require("body-parser");

var app=express();
app.use(bodyparser.urlencoded({extended:false}));

app.set("views",__dirname+"/views/");
app.set("view engine","ejs");

app.get("/",function(req,res,next){
	res.render("from");

})

app.post("/dopost",function(req,res,next){
	if(req.body.usename != "admin" || req.body.password !="123" ){
		res.redirect("/");
	}else{
		res.send("欢迎使用");
		
	}
})

app.listen(3001,function(){
	console.log("3001.......")
})
