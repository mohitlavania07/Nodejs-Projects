const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send('Hello,'+ req.query.name);
})
app.get('/about', (req, res)=>{
    res.send('Hello, here Mohit Pandit');
})
app.listen(3000);