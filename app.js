const express = require('express');
var mysql = require('./db_config')
const app = express();

//////////////////////////////////
// permettre l'accès à l'API (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
//   app.use((req, res) => {
//     res.json({ message: "UPDATE !" }); 
//  });

 app.get('/',(req,res)=>{
    var getAgence = "SELECT * FROM agences WHERE id <> 1";
    mysql.query(getAgence,function(err,resulta){
      if(err){
        console.log(err);
        res.send(err)
      }else{
        res.send(resulta)
      }
    })
 })
 app.get('/agence',(req,res)=>{
  res.json("agence");
})

module.exports = app;