const express = require('express');
const { detail, add } = require('../controllers/productsController');
const router = express.Router();


router
    .get('/productDetail:id?', detail)
    .get('/agregar', add)

module.exports = router;



