const express=require("express");
const mysql=require("mysql");
const bodyparser=require("body-parser");
const url=require("url");
const ejs=require("ejs");
var app=express();

app.use(bodyparser.urlencoded({extended:false}));

var client=mysql.createConnection({
	lost:"localhost",
	user:"root",
	password:"123",
	port:3306,
	database:"mytext2"
});

client.connect();
//接收到jsonp传送时必须为get，因为post提交方式也会自动转为get
app.get("/user",function(req,res,next){
	console.log("接收到请求");
	//get请求
	var pathname=url.parse(req.url,true).query;
	client.query("select * from student where xm=? and nl=?",[pathname.xm,pathname.nl],function(err,reslt){
		if(err){
			console.log(err);
		}else{
			console.log(reslt);
			if(reslt.length>0){
				res.jsonp(1);
			}else{
				res.jsonp(0);
			}	
		}
	})


	/*var json=[
		{name:"adsd",age:24},
		{name:"sad",age:34}
	]*/
	//res.jsonp(json);

	//修改数据使其出现jsonp格式例

	//jQuery311048430834407918155_1476936026094([{"name":"adsd","age":24},{"name":"sad","age":34}])
	/*var data=req.url.split("callback=")[1];
	var newdata=data.split("&_=")[0];
	res.send(newdata+"("+JSON.stringify(json)+")");;*/

	
});

app.listen(3022,function(){
	console.log("3022.......");
});