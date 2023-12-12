const express = require('express');
const {add, detail} = require('../controllers/productController');
const router = express.Router();

/* /Products */ 

router.get('/agregar', add, detail);


module.exports = router;



