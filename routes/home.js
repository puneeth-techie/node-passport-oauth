const express = require('express');
const router = express.Router();

//controller handlers
const homeController = require('../controllers/home');

//request handlers
router.get('/', homeController.homepage);

module.exports = router;
