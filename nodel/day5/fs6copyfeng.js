const fs=require("fs");
//小文件
function copys(src,dst){ //src源文件，dst目标文件
	fs.writeFileSync(dst,fs.readFileSync(src),"utf-8");
}
//copys("./f1.txt","./f1copy.txt");

//大文件
function copyb(src,dst){ //src源文件，dst目标文件
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
copyb("./f1.txt","./abc/fs.txt");


/*function main(arg){
	copys(arg[0],arg[1]);
}
main(process.argv.slice(2));  //在命令行调用

try{  //如果程序报错时执行。。。。
	main(process.argv.slice(2));
}catch(e){
	console.log(e);
}

console.log("over");*/
