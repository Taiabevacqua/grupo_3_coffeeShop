const {check, body} = require('express-validator');

module.exports= [ 
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('price')
        .notEmpty().withMessage('El precio es obligatorio'),
    check('category')
        .notEmpty().withMessage('Se require especificar una categoría').bail(),
    body('imagen')
        .custom((value, {req}) => {
            if(!req.files.imagen){
                return false
            }
            return true
        }).withMessage('Se requiere que tenga al menos una imagen principal'),
    check('description')
            .notEmpty().withMessage('Se requiere una descripción del producto').bail()
            .isLength({
                min : 20,
                max : 500
            }).withMessage('La descripción debe tener entre 20 y 500 caracteres')
]