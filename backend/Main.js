const express= require('express');
const app = express();
const path =require('path');
const mysql= require('mysql');
const session= require('express-session');
const MySqlStore= require('express-mysql-session')(session);
const Router =require('./Router');

app.use(express.static(path.join(__dirname,'build')));
app.use(express.json());

console.log('Testing Server')
//Database

const db= mysql.createConnection({
     host: 'localhost',
     port: '3306',
     user: 'puscd',
     password:'k',
     database: 'user'
});
//connection.connect();
    // console.log(db)

db.connect(function(err){
    if(err){
    	console.log("DB error",err.code + '--' + err.address + '---'+ err.message + '---' + err.stack + '----' + err.dest);
	return false;
    }
    else console.log('Successfully Connected To DB')
});

const sessionStore= new MySqlStore({
     expiration: (1825*86400),
     endConnectionOnClose: false
},db);

app.use(session({
     key: 'project',
     secret: 'login',
     store: sessionStore,
     resave: false,
     saveUninitialized: false,
     cookie:{
          maxAge: (1825*86400*1000),
          httpOnly: false
     }
}));

new Router(app,db);

app.get('/',function(req,res){
     res.sendFile(path.join(__dirname, 'build','index.html'));
});
 
app.listen(3000);
console.log("Running  on Port 3000");
