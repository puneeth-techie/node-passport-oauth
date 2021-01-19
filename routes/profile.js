const { authCheck } = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

//controller handlers
const profileController = require('../controllers/profile');

//route handlers
router.get('/', authCheck, profileController.profile);

module.exports = router;