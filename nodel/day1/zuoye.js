//登陆用户，第一种单个用户名和密码
/*var num=false;
console.log("请输入用户名");
process.stdin.on("data",(data)=>{
	data=data.toString().trim();
	if(num){
		if(data=="123"){
			console.log("恭喜！密码正确");
			process.exit();
		}else{
			clear();
			console.log("密码错误请重新输入");
		}
	}else{
		if(data=="admin"){
			num=true;
			clear();
			console.log("用户名正确,请输入密码");
		}else{
			clear();
			console.log("用户名错误请重新输入用户名");
		}
	}
})
function clear(){
	process.stdout.write('\033[0f');
	process.stdout.write('\033[2J');
}*/
//登陆用户，第二种多个用户名和密码

var num=null;
console.log("请输入用户名");
var arr=[];
var xinxi={
	"admin":123,
	"zong":111
}
for(var i in xinxi){
	arr.push(i);
}
process.stdin.on("data",(data)=>{
	data=data.toString().trim();
	if(num){
		if(data==xinxi[num]){
			console.log("恭喜！密码正确");
			process.exit();
		}else{
			clear();
			console.log("密码错误请重新输入");
		}
	}else{
		if(arr.indexOf(data)>-1){
			num=data;
			clear();
			console.log("用户名正确,请输入密码");
		}else{
			clear();
			console.log("用户名错误请重新输入用户名");
		}
	}
})
function clear(){
	process.stdout.write('\033[0f');
	process.stdout.write('\033[2J');
}