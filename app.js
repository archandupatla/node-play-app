const http = require('http');
const express = require('express');
const app = express();
const addName = require('./routes/add-name');
const rootPage= require('./routes/root-page');
const path = require('path')
app.use(express.static(path.join(__dirname,'client/demo-aws-react','build')));
app.use('/admin',addName);
app.use(rootPage);
app.use((req,res)=>{
res.send('<h1>Page Not Found</h1>')
})
app.listen(5000);