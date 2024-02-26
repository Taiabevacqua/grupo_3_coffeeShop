const express = require('express');
const { login, register,processRegister,processLogin, logout, profile } = require('../controllers/usersController');
const userRegisterValidator = require('../validations/user-register-validator');
const userLoginValidator = require('../validations/user-login-validator');
const checkUserLogin = require('../middlewares/checkUserLogin');
const userUpload = require('../middlewares/userUpload');
const router = express.Router();

/* usuarios */
router
    .get('/login', login)
    .post('/crearUsuario', userUpload.fields([{name : 'userImagen'}]), userRegisterValidator, processRegister)
    .get('/register', register)
    .post('/ingreso',userLoginValidator,processLogin)
    .get('/salir',logout)
    .get('/perfil/:id ',checkUserLogin,profile)

module.exports = router;

