const express = require('express');
const { detail } = require('../controllers/productController');
const router = express.Router();



router
.get('/detalle/:id?', detail)




module.exports = router;



