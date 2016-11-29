process.send({msg:"hello"});

process.on("message",function(msg){
	console.log(msg)
})