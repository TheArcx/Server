// start file is always index.js

const express = require('express');
// this creates an app object with express
const app = express();

// route handlers with express: localhost:5000
// new route handler creates when .get is called /post/put/delete/patch are others
// req is the request, res is the outgoing object
// res.send is the payload
app.get('/', (req,res) => {
    res.send({ hi: 'there' });
});

// deployed via Heroku, otherwise deploy on 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);