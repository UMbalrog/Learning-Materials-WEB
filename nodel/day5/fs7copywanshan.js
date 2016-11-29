const fs=require("fs");

var reader=fs.createReadStream("./b.mp4");
var writer=fs.createWriteStream("./bcopy.mp4");

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

	var falg=writer.write(chunk,function(err){

		if(err){
			console.log(err);
		}else{
			process.stdout.write('\033[0f');
			process.stdout.write('\033[2J');
			console.log("read"+((curSize/fileSize)*100).toFixed(1)+"%");
		};
	});
	console.log(falg);
	if(!falg){ //没有读完时暂停
		reader.pause();
	}
})

writer.on("drain",function(){ //检测写入完成
	console.log("buffer to target");
	reader.resume(); //继续读
})
reader.on("end",function(){
	writer.end();
})




