//本日历在cmd中运行，在文件名后跟着输入参数，年份和月份，即可输出本月的日历，若不输入参数就输出当月日历
	var time=null;
	time=process.argv.slice(2);
	function tian(n){
		if(n<10){
			return "0"+n;
		}else{
			return n;
		}
	}
	//判断是否有年份月份输入
	if(time.length==0){
		var da=new Date();
		var year=da.getFullYear();
		var min=da.getMonth()+1;
		time=[year,min];
	}
	//储蓄每个月有几天的数组
	var arr=[31,28,31,30,31,30,31,31,30,31,30,31];
	//if这里判断是否为闰年
	if((time[0]%4==0 && time[0]%100!=0) || time[0]%400==0){
		arr[1]=29;
	}
	//获取本月第一天从几号开始
	da=new Date(time[0],time[1]-1,1);
	var week=da.getDay();
	//拼出月份字符串；
	var str=`
日 一 二 三 四 五 六
`;
	for(var i=0;i<week;i++){
		str=str+`   `;
	}
	for(var j=1;j<=arr[time[1]-1];j++){
		if(i%7==0){
			str=str+`
${tian(j)} `;
		}else{
			str=str+`${tian(j)} `;
		}
		i++;
	}
	console.log(str);
	//console.log(str3);
