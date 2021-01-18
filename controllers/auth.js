exports.login = (req, res, next) => {
    res.render('login');
};

exports.logout = (req, res, next) => {
    res.send('You have successfully logged out.');
};
