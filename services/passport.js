// Houses all passport configuration

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Instruct passport
const keys = require('../config/keys'); // Object with keys
const mongoose = require('mongoose');

// pull schema out of mongoose, the model class
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id); // this is {_id} not googleid in mongo
});

// id = user.id the token. turn id into mongoose model instance
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null,user);
    })
});

// googlestrategy can be accessed with 'google'
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true // Tell google to trust the proxy
    }, 
    async (accessToken,refreshToken,profile, done) => { // take information recieved from google, create in database
        const existingUser = await User.findOne({ googleId: profile.id }); // Query the DB
            if(existingUser){
                // Record already exists
                done(null, existingUser);
            }
            // Record does not exist
            const user = await new User({ googleId: profile.id}).save() // save
            done(null,user);
        }
    )
);