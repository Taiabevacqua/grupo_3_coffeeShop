const express = require('express');
const { login, register,  } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validatior');
const userLoginValidator = require('../../validations/user-login-validator');
const checkUserLogin = require('../middlewares/checkUserLogin');
const router = express.Router();

/* usuarios */
router
    .get('/login', login)
    .post('/crearUsuario', userUpload.fields([{name : 'userImage'}]), userRegisterValidator, processRegister)
    .get('/register', register)
    .post('/ingreso',userLoginValidator,processLogin)
    .get('/salir',logout)
    .get('/perfil/:id ',checkUserLogin,profile)

module.exports = router;

