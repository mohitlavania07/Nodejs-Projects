const express = require('express');
require('./config')
const Product = require('./product')

const app = express();
app.use(express.json());

app.post('/create',async(req,res)=>{
    let data = new Product(req.body)
    let result = await data.save();
    console.log(result);
  res.send(result)
})

//   For GET API...

app.get('/list',async(req,res)=>{
    let data = await Product.find()
    console.log(data);
    res.send(data);
})
app.listen(5000);