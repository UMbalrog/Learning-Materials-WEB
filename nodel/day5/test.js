function sout(){
	var i=0;
	console.log(i);
	var b=234;
	return function sin(){
		i++;
		b=45;
		console.log(i+","+b);
	}
}
sout()();
console.log(b);