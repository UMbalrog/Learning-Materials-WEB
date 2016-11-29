const express = require("express");
const ejs = require("ejs");
const body_parser = require("body-parser");
var app = express();

app.use(body_parser.urlencoded({extended:false}));

app.set( "views",__dirname+"/views/");
app.set( "view engine","ejs");

var conf = require("./config/config.js")(app);

app.listen(3000,function () {
	console.log("3000........")
});

