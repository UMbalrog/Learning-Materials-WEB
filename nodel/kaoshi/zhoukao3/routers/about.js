const express = require("express");
var route = express.Router();

route.get("/about",function(request,response,next) {
	response.render("about");
});

module.exports=route;
