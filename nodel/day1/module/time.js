function times(n){
	console.log(n);
	var t=setInterval(function(){
		if(n>0){
			n--;
			process.stdout.write('\033[0f');
			process.stdout.write('\033[2J');
			console.log(n);
		}else{
			clearInterval(t);
		}
	},1000)
}
exports.times=times;
function shi(){
	//var data=new Date();
	//var num=data/1000;
	var shitime=setInterval(function(){
		process.stdout.write('\033[0f');
		process.stdout.write('\033[2J');
		var data=new Date();
		var str=data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();
		console.log(str);
	},1000)
}
exports.shi=shi;