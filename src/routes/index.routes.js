const express = require('express');
const { index, cart, admin, searchAdmin, sucursales } = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');

const router = express.Router();

/* home */
router
    .get('/', index)
    .get('/productCart', cart)
    .get('/dashboard', admin)
    .get('/admin/productos/buscar',checkAdmin, searchAdmin)
    .get('/sucursales', sucursales)



module.exports = router;

