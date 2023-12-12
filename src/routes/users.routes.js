const express = require('express');
const { login, register } = require('../controllers/userController');
const router = express.Router();

/* usuarios */
router.get('/login',login)
      .get('/register',register)
      
module.exports = router;

