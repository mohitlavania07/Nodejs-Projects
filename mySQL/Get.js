const express = require('express');
const app = express();
const con = require('./config');

app.get('/',(req,res)=>{
  con.query("select * from connect",(err,result)=>{
    if(err){
        res.send("error occured");
    }else{
        res.send(result)
    }
  })
});
app.listen(5000);