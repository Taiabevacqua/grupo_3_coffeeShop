const express = require('express');

const { index, cart } = require('../controllers/indexController');
const { detail } = require('../controllers/productsController');
const { login, register } = require('../controllers/usersController');

const router = express.Router();

/* home */
router
    .get('/', index)
    .get('/productCart', cart)
 


module.exports = router;

