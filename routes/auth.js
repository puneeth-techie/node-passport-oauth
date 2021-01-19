const passport = require('passport');
const router = require('express').Router();
const authController = require('../controllers/auth');

router.get('/login', authController.login);
router.get('/logout', authController.logout);


router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res, next) => {
    res.redirect('/profile/');
});

module.exports = router;