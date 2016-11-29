//判断式的压缩(gzip)
const http=require("http");
const zlib=require("zlib");


http.createServer(function (request, response) {
    var i = 1024,
        data = '';
    while (i--) {
        data += '.';
    }
    //console.log(data);
   //console.log(request.headers);
    if ((request.headers['accept-encoding'] || '').indexOf('gzip') !== -1) { //判断是否可以压缩；
        zlib.gzip(data, function (err, data) {
            response.writeHead(200, {
                'Content-Type': 'text/plain',
                'Content-Encoding': 'gzip'
            });
            response.end(data);
            var zlibfile=zlib.createGzip();//压缩

            console.log("ok");
        });
        
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.end(data);
         console.log("err");
    }
}).listen(7000);
console.log("listen7000........")


//解压文件
var options = {
        hostname: 'www.example.com',
        port: 80,
        path: '/',
        method: 'GET',
        headers: {
            'Accept-Encoding': 'gzip, deflate'
        }
    };
 
http.request(options, function (response) {
    var body = [];
 
    response.on('data', function (chunk) {
        body.push(chunk);
    });
 
    response.on('end', function () {
        body = Buffer.concat(body);//拼接数组
 
        if (response.headers['content-encoding'] === 'gzip') {
            zlib.gunzip(body, function (err, data) {
                console.log(data.toString());
            });
        } else {
            console.log(data.toString());
        }
    });
}).end();
