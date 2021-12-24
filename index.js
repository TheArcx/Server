//'nodemon index.js' script to allow it re-run on any input type


const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');

require('./models/user'); // This statement must be above the one below
require('./services/passport'); // Require the passport function

mongoose.connect(keys.mongoURI);

// This creates an app object with express
const app = express();

// authroute returns function and we want to call with with app
require('./routes/authroute')(app);

// deployed via Heroku, otherwise deploy on localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);