const http = require ( "http" );
const fs = require( "fs" );
const path = require("path");


var server = http.createServer ( function ( request , response ){
			
		//response.end("hello")

		console.log(request.url);

		var str=request.url.split("/")[1];

		fs.readFile(str,function(err,data) {
			response.end(data);
		})

		/*var reader = fs.createReadStream(str);

		reader.pipe(response,{end:false});

		reader.on("end",function() {
			adds();
		})
		function adds(){
			response.end();
		}*/

			
			
}).listen (3001,function(){
	console.log("3001....");
});
