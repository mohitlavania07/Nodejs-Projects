// Put (update) the data through API...!

const express = require('express');
const dbConnect = require('./mongoDb(connection)');
const app = express();

app.use(express.json());
 
app.get('/',async (req, res)=>{
    let db = await dbConnect();
    db = await db.find().toArray();
    console.log(db)
    res.send(db)
});

// app.post('/',async (req,res)=>{
//     let db = await dbConnect();
//     let result = await db.insertMany(req.body)
//     res.send(result);
//     console.log(result);
//     // console.log(req.body)
//     // res.send({name: "Mohit"});
// })

app.put('/',(req,res)=>{
  let db = await dbConnect();
  let result = db.updateOne()
  console.log(req.body)
  res.send({name: "Mohit"});
})

app.listen(5000);