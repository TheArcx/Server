// Houses all passport configuration

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Instruct passport
const keys = require('../config/keys'); // Object with keys

// googlestrategy can be accessed with 'google'
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken,refreshToken,profile, done) => { // take information recieved from google, create in database
            console.log('access token', accessToken);
            console.log('refreshtoken',refreshToken);
            console.log('profile:',profile);
        }
    )
);