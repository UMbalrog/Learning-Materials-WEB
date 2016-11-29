const express = require("express");
var route = express.Router();

route.post("/dopost",function(request,response,next) {
	//console.log(req.body.username);
	if (request.body.username !== "bawei" || request.body.password !== "123456") {
		response.redirect("/login");
	} else {
		response.redirect("/index");
	}
	
});

module.exports=route;
