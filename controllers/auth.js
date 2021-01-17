const passport = require('passport');

exports.login = (req, res, next) => {
    res.render('login');
}

exports.login_google = passport.authenticate('google', {
    scope: ['profile']
});

exports.logout = (req, res, next) => {
    res.send('You have successfully logged out.');
}

exports.google_redirect = (req, res, next) => {
    res.send('You have successfully logged in');
}