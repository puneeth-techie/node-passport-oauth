exports.profile = (req, res, next) => {
    const user = req.user;
    res.render('profile', { user });
}