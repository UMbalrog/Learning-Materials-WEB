const fs=require("fs");
const iconv=require("iconv-lite");// 引出编译模块
//binary 字节，以字节方式输出
var data=fs.readFileSync("./b.txt","binary");

console.log(data);

fs.writeFileSync("./b.txt",data.replace("a","b"),"binary");