const http = require('http');
const express = require('express');
const app = express();
const addName = require('./routes/add-name');
const rootPage= require('./routes/root-page');
// app.use('/users',(req, res, next) => {
//     //req.setHeader('Content-Type','text/html');
//     res.send('<p>On Users Page</p>')
//     //next();
// });
// app.use('/',(req, res, next) => {
//     res.send('<p>On root Page</p>')
// });
// app.use((req, res, next) => {
//     console.log('in the third method');
   
// });

app.use('/admin',addName);
app.use(rootPage);
app.use((req,res)=>{
res.send('<h1>Page Not Found</h1>')
})
app.listen(5000);