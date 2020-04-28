const express = require('express');
const router = express.Router();
const Product = require('../models/products');

router.post('/product', (req,res,body)=>{
    console.log(req.body.name);
    const title = req.body.name;
    const price=12.99;
    const product = new Product({
        title:title, price:price
    });
    product.save().then(res => console.log('Product Saved')).catch(err => console.log('Product failed to save'));
    res.redirect('/');
})

module.exports = router