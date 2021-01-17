const config = require('config');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

//getting the google client id and secret id
const clientID = config.get('googleClientID');
const clinetSecret = config.get('googleClientSecret');

passport.use(new GoogleStrategy({
    // options for google-oauth
    callbackURL: '/auth/google/redirect',
    clientID: clientID,
    clinetSecret: clinetSecret
}, () => {
    // callback function for google-oauth
}));