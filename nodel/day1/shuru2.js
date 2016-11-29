var data=process.argv.slice(2);
if(data.length==0){
	console.log("您没有输入参数，程序报错");
}else{
	console.log("您好"+data[0]);
}