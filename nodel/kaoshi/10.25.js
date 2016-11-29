const fs = require("fs");

var str = "./a.txt";
//同步小
//fs.writeFileSync("./a2.txt",fs.readFileSync(str)) 
//通道大
/*var reader = fs.createReadStream("./b.mp4");
var writer = fs.createWriteStream("./bcopy.mp4");
reader.pipe(writer); */

//异步小
/*fs.readFile(str,function(err,files) {
	if(err) {
		console.log(err);
	} else {
		fs.writeFile("./a2.txt",files,function(){
			console.log("ok");
		})
	}
})*/
//异步大
var reader = fs.createReadStream("./b.mp4");
var writer = fs.createWriteStream("./bcopy.mp4");

var zonglong = 0;
fs.stat("./b.mp4",function(err,states) {
	if(err) {
		console.log(err);
	} else {
		zonglong = states.size;
	}
})

var curlong = 0;
reader.on("data",function(chunk) {
	curlong += chunk.length;
	writer.write(chunk,function(err) {
		if(err) {
			console.log(err);
		} else {
			//console.log(zonglong+","+curlong);
			process.stdout.write('\033[0f');
			process.stdout.write('\033[2J');
			console.log(((curlong/zonglong)*100).toFixed(2)+"%");
		}
	})
})



