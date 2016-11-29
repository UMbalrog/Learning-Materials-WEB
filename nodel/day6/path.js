const fs=require("fs");
const path=require("path");

console.log(path.extname("a.txt"));
console.log(path.join(__dirname,"a.txt"));
console.log(path.normalize("D:\\Nodejs\\nodel\\day6\\a.txt"));