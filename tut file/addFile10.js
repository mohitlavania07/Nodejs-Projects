const express   = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'crud');

app.set('veiw engine', 'ejs');

app.get('/profile',(req, res)=>{
    const user ={
        name:'mohitlavania',
        email:'mohitlavania2003gmail.com',
        address: 'ghaziabad',
        phone_no: '09897867565'
    }
    res.render('profile.ejs',{user});
});
app.get('/about',(req, res)=>{
    res.sendFile(`${publicPath}/about.html`)
});
app.get('*',(req, res)=>{
    res.sendFile(`${publicPath}/404.html`)
});
app.listen(4000);