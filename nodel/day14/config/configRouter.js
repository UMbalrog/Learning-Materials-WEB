var index=require("../route/index.js");
var list=require("../route/list.js");
var pubbb=require("../route/pubbb.js");
var userlist=require("../route/userlist.js");

var login=require("../route/login.js");
var loginss=require("../route/loginss.js");

module.exports=function(app){
	app.get("/",index);
	app.get("/list",list);
	app.get("/pubbb",pubbb);

	app.post("/userlist",userlist);
	app.get("/login",login);
	app.post("/loginss",loginss);
};
