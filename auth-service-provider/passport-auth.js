const { Users } = require('../models/users-model');
const config = require('config');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//getting the google client id and secret id
const client_ID = config.get('googleClientID');
const clinet_Secret = config.get('googleClientSecret');

//serialize the user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//deserialize the user
passport.deserializeUser((id, done) => {
    Users.findById(id).then((user) => {
        done(null, user);
    }).catch((err) => {
        console.error(err);
    })
});

passport.use(new GoogleStrategy({
    // options for google-oauth
    callbackURL: 'http://localhost:5000/auth/google/redirect',
    clientID: client_ID,
    clientSecret: clinet_Secret
}, async (accessToken, refreshToken, profile, done) => {
    // callback function for google-oauth
    // console.log('callback function fired.');
    // console.log(profile);
    // let user = await Users.findById(profile.id);
    // if(user) console.log('User already exist.');
    Users.findOne({ googleId: profile.id})
        .then((currentUser) => {
            if(currentUser){
                console.log(`User already exists: ${currentUser.name}`);
                done(null, currentUser);
            }else{
                new Users({
                    name: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log(`New User Created: ${newUser}`);
                    done(null, newUser);
                })
                .catch((error) => {
                    console.log(error.message);
                });
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
}));