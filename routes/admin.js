const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/admin', (req,res)=>{
   // req.session.isLoggedin = true
    res.send("<form action='/product' method='post'><input type='text' name='name'/><button type='submit'>Submit</button></form>")
});

module.exports = router