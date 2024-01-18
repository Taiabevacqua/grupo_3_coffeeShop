const {check,body} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('price')
        .notEmpty().withMessage('El precio es obligatorio'),
    check('stock')
        .notEmpty().withMessage('El stock es obligatorio'),
    check('category')
        .notEmpty().withMessage('La categoría es requerida'),
    body('imagen')
        .custom((value, {req}) => {
            if(!req.files.imagen){
                return false
            }
            return true
        }).withMessage('Se require una imagen'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min: 20,
            max: 500
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
]