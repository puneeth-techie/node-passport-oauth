exports.homepage = (req, res, next) => {
    const user = req.user;
    res.render('home', { user});
}