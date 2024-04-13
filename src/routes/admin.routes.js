const express = require('express');
const {dashboard, search} = require('../controllers/adminControllers');
const router = express.Router();
const checkAdmin = require('../middlewares/checkAdmin');


/* dashboard */
router
  .get('/dashboard',checkAdmin, dashboard)
  .get('/search',checkAdmin, search)

module.exports = router;