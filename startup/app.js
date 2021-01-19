const passport = require('passport');
const cookieSession = require('cookie-session');
const config = require('config');
const googleAuth = require('../auth-service-provider/passport-auth');
const morgan = require('morgan');
const express = require('express');
const app = express();

// importing routes
const home = require('../routes/home');
const auth = require('../routes/auth');
const profile = require('../routes/profile');

// set up middleware
app.use(express.json());
app.use(morgan('dev'));

//set up cookie session
const cookieKey = config.get('cookieKey');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [cookieKey]
}));

//intialize the passport
app.use(passport.initialize());
app.use(passport.session());

// set up routes middlwares
app.use('/', home);
app.use('/auth', auth);
app.use('/profile', profile);

//set up vioew engine
app.set('view engine', 'ejs');


module.exports = app;