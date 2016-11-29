const express = require("express");
var route = express.Router();

route.get("/index",function(request,response,next) {
	response.render("index");
});

module.exports=route;
