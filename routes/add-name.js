const express = require('express');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-name', (req, res, next) => {
    console.log('you are on add name paghe')
  res.send('<p>wewg</p>');
});


module.exports = router;
