const express = require('express');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-name', (req, res, next) => {
  res.send('<p>Enter Your name</p><input type="text"/>');
});


module.exports = router;
