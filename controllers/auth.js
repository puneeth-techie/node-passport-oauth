exports.login = (req, res, next) => {
    const user = req.user;
    if(user){
        res.redirect('/');
    }else{
        res.render('login');
    }
};

exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('/auth/login');
};
