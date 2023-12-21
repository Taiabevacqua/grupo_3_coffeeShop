const express = require('express');

const { index, cart, admin } = require('../controllers/indexController');

const router = express.Router();

/* home */
router
    .get('/', index)
    .get('/productCart', cart)
    .get('/dashboard', admin)



module.exports = router;

