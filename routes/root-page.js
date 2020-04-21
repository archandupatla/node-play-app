const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('<p>You are on the root page</p>')
});

module.exports = router