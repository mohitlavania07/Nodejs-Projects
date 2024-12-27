const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: "user"
})
con.connect((err)=>{
    if(err){
        console.warn("error")
    }else{
        console.warn("connected")
    }
});
con.query("select * from mohit",(err,result)=>{
     
        console.warn("result",result);
});