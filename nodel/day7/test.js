const fs=require("fs");
const http=require("http");

/*fs.readFile("./mime.json",function(err,data){
	var obj=eval("("+data.toString()+")");
	for(var i in obj){
		console.log(i+"=>"+obj[i]);
	}
})*/

fs.readdir("./publus",function(err,file){
	fs.stat(file[1],function(err,state){
		console.log(state.isDirectory());
	})
})


