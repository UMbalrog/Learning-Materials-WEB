const fs=require("fs");

var reader=fs.createReadStream("./b.mp4");

var fileSize=0;
fs.stat("./b.mp4",function(err,state){
	if(err){
		console.log(err);
	}else{
		fileSize=state.size;
		console.log(fileSize);
	}
})
var curSize=0;
reader.on("data",function(chunk){
	curSize+=chunk.length;
	process.stdout.write('\033[0f');
	process.stdout.write('\033[2J');
	console.log("read"+((curSize/fileSize)*100).toFixed(1)+"%");
})

console.log("this fs3 file");