//'nodemon index.js' script to allow it re-run on any input type

const express = require('express');
require('./services/passport'); // Require the passport function


// This creates an app object with express
const app = express();

// authroute returns function and we want to call with with app
require('./routes/authroute')(app);

// deployed via Heroku, otherwise deploy on localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);