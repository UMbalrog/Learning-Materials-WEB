module.exports=function(mysql){
	var client=mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"123",
		port:3306,
		database:"mytext2"
	});
	client.connect();
	return client;
}