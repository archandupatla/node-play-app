const express = require('express');

const router = express.Router();
const product = require('../models/products');
router.get('/products', (req,res,next)=>{
    console.log('session key', req.session.isLoggedin)
    console.log('in the products route')
    product.find().then((products)=>{
    console.log(products);
    res.json(products)
})
})

module.exports = router;