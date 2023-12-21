const express = require('express');
const { detail } = require('../controllers/productsController');
const router = express.Router();


router
    .get('/productDetail:id?', detail)


module.exports = router;



