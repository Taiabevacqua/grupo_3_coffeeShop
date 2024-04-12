const express = require('express');
const { index, cart, admin, searchAdmin, sucursales , complementos, capsulas, cafeteras, cafeMolido} = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');

const router = express.Router();

/* home */
router
    .get('/', index)
    .get('/productCart', cart)
    .get('/dashboard', admin)
    .get('/admin/productos/buscar',checkAdmin, searchAdmin)
    .get('/sucursales', sucursales)
    .get('/complementos', complementos)
    .get('/capsulas', capsulas)
    .get('/cafeteras', cafeteras)
    .get('/cafeMolido', cafeMolido)



module.exports = router;

