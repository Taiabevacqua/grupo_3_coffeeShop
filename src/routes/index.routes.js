const express = require('express');

const { index, cart, admin } = require('../controllers/indexController');
const { detail } = require('../controllers/productController');
const { login, register } = require('../controllers/userController');

const router = express.Router();

/* home */
router
    .get('/', index)
    .get('/productCart', cart)
    .get('/productDetail:id?', detail)
    .get('/login', login)
    .get('/register', register)
    .get('/dashboard',admin)


module.exports = router;

