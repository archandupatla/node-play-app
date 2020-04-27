const express = require('express');
const router = express.Router();
const Product = require('../models/products');

router.post('/product', (req,res,body)=>{
    console.log(req.body.name);
    const product = new Product();
    product.save(req.body.name)
    res.redirect('/')
})

module.exports = router