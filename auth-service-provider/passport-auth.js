const config = require('config');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//getting the google client id and secret id
const client_ID = config.get('googleClientID');
const clinet_Secret = config.get('googleClientSecret');

passport.use(new GoogleStrategy({
    // options for google-oauth
    callbackURL: 'http://localhost:5000/auth/google/redirect',
    clientID: client_ID,
    clientSecret: clinet_Secret
}, (accessToken, refreshToken, profile, done) => {
    // callback function for google-oauth
    console.log('callback function fired.');
    console.log(profile);
}));