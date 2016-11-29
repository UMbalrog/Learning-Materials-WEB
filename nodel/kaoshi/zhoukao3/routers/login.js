const express = require("express");
var route = express.Router();

route.get("/login",function(request,response,next) {
	response.render("login");
});

module.exports=route;
