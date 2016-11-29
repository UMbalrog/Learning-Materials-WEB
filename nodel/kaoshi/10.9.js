const fs=require("fs");

//小文件拷贝
/*var reader=fs.readFileSync("./a.txt");
fs.writeFileSync("./acopy.txt",reader);
console.log(fs.readFileSync("./acopy.txt").toString());*/

//大文件拷贝管道方法 
/*var reader=fs.createReadStream("./b.mp4");
var writer=fs.createWriteStream("./bcopy.mp4");
reader.pipe(writer);*/

//大文件拷贝进度条 

var reader=fs.createReadStream("./b.mp4");
var writer=fs.createWriteStream("./bcopy.mp4");
var filename=0;
fs.stat("./b.mp4",function(err,states){
	if(err){
		console.log(err);
	}else{
		filename=states.size;
		console.log(filename);
	}
})
var curname=0;
reader.on("data",function(chunk){
	curname+=chunk.length;
	var falg=writer.write(chunk,function(err,file){
		if(err){
			console.log(err);
		}else{
			process.stdout.write('\033[0f');
			process.stdout.write('\033[2J');
			console.log("write "+((curname/filename)*100).toFixed(1)+"%");
		}
	})
	if(!falg){
		reader.pause();
		console.log("pause");
	}
})
writer.on("drain",function(){
	reader.resume();
	console.log("resume");
})
reader.on("end",function(){
	writer.end();
	console.log("end");
})



