const express = require('express');
const { detail, add, cafeteras, capsulas, cafeengrano, edit, create,  update, search, remove } = require('../controllers/productsController');

const router = express.Router();
const upload = require('../middlewares/upload');
const productAddValidatior = require('../validations/product-add-validator');

router
  .get('/agregar', add)
  .post('/store', upload.single('image'),productAddValidatior, create)

    .get('/productDetail:id?', detail)
    .get('/cafeteras', cafeteras )
    .get('/capsulas', capsulas )
    .get('/café en grano', cafeengrano )
    .get('/editar-articulo/:id', edit)
    .put('/update/:id',upload.single('imagen'),update)
    .get('/agregar', create)
    .get('/search', search)
    .delete("/eliminar/:id", remove)
    

module.exports = router;



