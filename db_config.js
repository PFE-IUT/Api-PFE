const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'',
    user:'',
    password: '',
    database: ''
});

connection.connect(function(err){
    if(!!err){
        console.log(err);
    }else{
        console.log("connexion");
    }
});

module.exports = connection;