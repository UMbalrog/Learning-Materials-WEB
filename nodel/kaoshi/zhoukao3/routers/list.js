const express = require("express");
var route = express.Router();

route.get("/list",function(request,response,next) {
	response.render("list");
});

module.exports=route;
