const zlib=require(" zlib");
const fs=require("fs");

var zlibfile=zlib.createGzip();
var readfile=fs.createReadStream("./html/index.html");
var targethtml=fs.createWriteStream("./html/base.html");
readfile.pipe(zlibfile).pipe(targethtml);
	