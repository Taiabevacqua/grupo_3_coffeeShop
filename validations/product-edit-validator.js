const {check} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('price')
        .notEmpty().withMessage('El precio es obloigatorio'),
        check('stock')
        .notEmpty().withMessage('El stock es obligatorio'),
    check('category')
        .notEmpty().withMessage('La categoría es requerida'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min: 20,
            max: 500
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
]