var var1="bawei";
var fun=function(){
	console.log("this is b.js file "+var1);
}
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.show=function(){
	return this.name+","+this.age;
}
console.log(exports==module.exports);
module.exports.Person=Person;//将Person输出去使其在其他js文件中可以使用
module.exports.fun=fun;
module.exports.var1=var1;