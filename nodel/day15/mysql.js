const mysql=require("mysql");
const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
var app=express();


app.use(bodyparser.urlencoded({extended:false}));

app.set("views",__dirname+"/views/");
app.set("view engine","ejs");

require("./config/config.js")(app);



/*var client=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123",
	port:3306,
	database:"mytext2"
});
client.connect();*/

//var conf=require("./routers/datab.js")(mysql);

/*app.get("/",function(req,res,next){
	client.query("select * from student where xh<?",[50],function(err,reslt){
		//console.log(reslt)
		res.render("list",{
			data:reslt
		})
	})
})*/

app.listen(3000,function(){
	console.log("3000........")
})