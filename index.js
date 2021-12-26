//'nodemon index.js' script to allow it re-run on any input type
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');

require('./models/user'); // This statement must be above the one below
require('./services/passport'); // Require the passport function

mongoose.connect(keys.mongoURI);

// This creates an app object with express
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24* 60 * 60 * 1000, // last 30 days
        keys: [keys.cookieKey]
    })
);

// tell passport to use cookies 
app.use(passport.initialize());
app.use(passport.session());

// authroute returns function and we want to call with with app
require('./routes/authroute')(app);

// deployed via Heroku, otherwise deploy on localhost:5000
const PORT = process.env.port|| 5000;
app.listen(PORT);