var login = require("../routers/login.js");
var about = require("../routers/about.js");
var index = require("../routers/index.js");
var list = require("../routers/list.js");
var dopost = require("../routers/dopost.js");


module.exports = function(app) {
	app.get("/login",login);
	app.get("/about",about);
	app.get("/index",index);
	app.get("/list",list);
	app.post("/dopost",dopost);
}