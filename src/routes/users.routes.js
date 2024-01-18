const express = require('express');
const { login, register } = require('../controllers/usersController');
const router = express.Router();
const userRegisterValidator = require('../../validations/user-register-validator');
const userLoginValidator = require('../../validations/user-login-validator');
const checkUserLogin = require('../middlewares/checkUserLogin');
const checkAuthUser = require('../middlewares/checkAuthUser');

/* usuarios */
router
    .get('/login', login)
    .get('/register', register)
    
module.exports = router;

