
// Get the data through API...!

const express = require('express');
const dbConnect = require('./mongoDb(connection)');
const app = express();

app.get('/',async (req, res)=>{
    let db = await dbConnect();
    db = await db.find().toArray();
    console.log(db)
    res.send(db)
});

app.listen(4000);