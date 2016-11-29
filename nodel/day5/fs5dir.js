const fs=require("fs");

fs.mkdir("./abc",function(err){
	if(err){
		console.log(err);
	}else{
		console.log("mkdir ok");
	}
})