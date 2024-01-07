const express = require('express');
const { detail, add, cafeteras, capsulas, cafeengrano, edit, create, store, update, todos, search } = require('../controllers/productsController');
//const { remove } = require('../controllers/productsController/remove');
const router = express.Router();
const upload = require('../middlewares/upload');

router
    .get('/productDetail:id?', detail)
    .get('/agregar', add)
    .get('/cafeteras', cafeteras )
    .get('/capsulas', capsulas )
    .get('/café en grano', cafeengrano )
    .get('/editar-articulo/:id', edit)
    .put('/update/:id',update)
    .get('/agregar-articulos', create)
    .get('/todos', todos)
    .get('/search', search)
    .post('/store', upload.single('imagen'), store)
    //.delete("/eliminar/:id", remove)

module.exports = router;



