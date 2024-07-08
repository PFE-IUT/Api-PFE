const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'sql104.infinityfree.com',
    user:'if0_36827403',
    password: '0PBtQMUZIg',
    database: 'if0_36827403_webAgence'
});

connection.connect(function(err){
    if(!!err){
        console.log(err);
    }else{
        console.log("connexion");
    }
});

module.exports = connection;