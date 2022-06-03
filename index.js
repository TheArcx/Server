//'nodemon index.js' script to allow it re-run on any input type
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/user');
require('./models/survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

// This creates an app object with express
const app = express();
// Middleware below
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24* 60 * 60 * 1000, // last 30 days
        keys: [keys.cookieKey]
    })
);

// passport to use cookies 
app.use(passport.initialize());
app.use(passport.session());

// Connect routes
require('./routes/authroute')(app);
require('./routes/billingroute')(app);
require('./routes/surveyroutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Serve up production assets for deployment only
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// deployed via Heroku, otherwise deploy on localhost:5000
const PORT = process.env.PORT|| 5000;
app.listen(PORT);