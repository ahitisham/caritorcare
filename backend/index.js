const mysql =require('mysql');

var mysqlConnection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'nodecrud'
});


mysqlConnection.connect((err)=>{
	if(!err){
		console.log('Db connection succed. ');
	}else{
		console.log('DB connection failed \n Eror: '+JSON.stringify(err,undefined,2));
	}
});