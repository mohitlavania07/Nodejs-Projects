const express = require('express')
const reqFilter = require('./reqFilter(middleware)')
const app = express();
const route = express.Router();


app.use(reqFilter);
// it uses Globally..

route.use(reqFilter); 
// it uses the middleware Globally..

app.get('/',(req,res)=>{
res.send("Welcome to Home page");
})
app.get('/users',reqFilter,(req,res)=>{
res.send("efhhfbdhfhdbnfkdncjdjbj");
})

// route 

// Apply reqFilter on a route..
route.get('/about',(req,res)=>{
res.send("about page");
})
route.get('/contact',(req,res)=>{
res.send("contact page");
})

app.use('/', route);
app.listen(3000);