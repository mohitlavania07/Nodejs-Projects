const express   = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'crud');

app.get('/about',(req, res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('*',(req, res)=>{
    res.sendFile(`${publicPath}/404.html`)
})
app.listen(4000);