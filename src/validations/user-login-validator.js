const { check, body } = require("express-validator");
const db = require('../database/models')
module.exports = [
    check("email")
        .notEmpty().withMessage('El email es obligatorio'),
    body("password")
        .notEmpty().withMessage("La contraseña es obligatoria").bail()
        .custom((value, {req}) => {
           
            return db.Users.findOne({
              where : {
                email : req.body.email
              } 
            }).then(user => {
                console.log(user);
                if(!user) {
                    return Promise.reject()
                }
            }).catch(error => {
                console.log(error)
                return Promise.reject('Credenciales inválidas')
            })
        })

]