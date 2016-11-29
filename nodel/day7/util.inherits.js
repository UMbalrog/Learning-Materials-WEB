const util=require("util");

function base(){
	this.name="base";
	this.age=1991;
	this.sayHello=function(){
		console.log("Hello"+this.name);
	}
}
base.prototype.showName=function(){
	console.log(this.name);
}

function sub(){
	//base.call(this);
	this.name="sub";	
}

util.inherits(sub,base);//只继承原型上的

var obase=new base();
obase.showName();
obase.sayHello();
console.log(obase);

var osub=new sub();
osub.showName();
//osub.sayHello();
console.log(osub.age);
console.log(osub);//继承之后子对象内部就有了超对象的东西


