const fs=require("fs");

var reader=fs.createReadStream("./b.mp4");
var writer=fs.createWriteStream("./bcopy1.mp4");

var fileSize=0;
fs.stat("./b.mp4",function(err,state){
	if(err){
		console.log(err);
	}else{
		fileSize=state.size;
		console.log(fileSize);
	}
})
//方法一
var curSize=0;
reader.on("data",function(chunk){
	curSize+=chunk.length;
	writer.write(chunk,function(err){
		if(err){
			console.log(err);
		}else{
			process.stdout.write('\033[0f');
			process.stdout.write('\033[2J');
			console.log("read"+((curSize/fileSize)*100).toFixed(1)+"%");
		}
	});
})
//方法二 管道方法
//reader.pipe(writer);
console.log("copy fs4 file");