var length=6;
function fn(){
	console.log(this.length);
}

var obj={
	length:4,
	module:function(fn){
		fn();
		arguments[0]();
	}
}

obj.module(fn,1);