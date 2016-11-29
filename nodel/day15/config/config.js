var list=require("../routers/list.js");
var login=require("../routers/login.js");
var dopost=require("../routers/dopost.js");

module.exports=function(app){
	app.get("/",list);
	app.get("/login",login);
	app.post("/dopost",dopost);
}