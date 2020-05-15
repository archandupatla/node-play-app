const express = require('express');
const path = require('path');
const router = express.Router();
const http = require('http');
var request = require("request");



router.get('/authorize', (req,res)=>{
    
var options = { 
    method: 'POST',
    url: 'https://dev-91amchcz.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json'},
    body: '{"client_id":"XIC4Eg6m7bJmsLMZoGe5qmBDqANRnV3O","client_secret":"zGbBJUcXUFa9pB1VvfD5JlPGkmB7imEil5dWHQzsYk2b4e1dLdWJQlERBEokJg8l","audience":"https://dev-91amchcz.auth0.com/api/v2/","grant_type":"client_credentials"}' };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.json([{"hi":body}])
  });

    //  http.post('https://dev-91amchcz.auth0.com/oauth/token', )
    //  res.sendFile(path.join(__dirname,'../','client/demo-aws-react','build','index.html'))
});
// router.get('/abilash', (req,res)=>{
//     res.json([{"hi":"weeg"}]);
// })
module.exports = router