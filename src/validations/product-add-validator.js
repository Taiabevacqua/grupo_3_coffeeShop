const {check, body} = require('express-validator');

module.exports= [ 
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
        check('discount')
        .notEmpty().withMessage('Si el producto no tiene descuento ingrese 0'),
         
        check('originId')
        .notEmpty().withMessage('El origen es obligatorio'),
        check('flavor')
        .notEmpty().withMessage('El sabor es obligatorio'),
    check('price')
        .notEmpty().withMessage('El precio es obligatorio'),
    check('category')
        .notEmpty().withMessage('Se require especificar una categoría').bail(),
    body('image')
        .custom((value, {req}) => {
            if(!req.file){
                return false
            }
            return true
        }).withMessage('Se requiere que tenga al menos una imagen principal'),
    check('description')
            .notEmpty().withMessage('Se requiere una descripción del producto').bail()
]