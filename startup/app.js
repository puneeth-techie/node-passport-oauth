const googleAuth = require('../auth-service-provider/passport-auth');
const morgan = require('morgan');
const express = require('express');
const app = express();

// importing routes
const home = require('../routes/home');
const auth = require('../routes/auth');

// set up middleware
app.use(express.json());
app.use(morgan('dev'));

// set up routes middlwares
app.use('/', home);
app.use('/auth', auth);

//set up vioew engine
app.set('view engine', 'ejs');


module.exports = app;