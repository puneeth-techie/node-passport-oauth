const router = require('express').Router();
const authController = require('../controllers/auth');

router.get('/login', authController.login);
router.get('/google', authController.login_google);
router.get('/logout', authController.logout);
router.get('/google/redirect', authController.google_redirect);

module.exports = router;