const passport = require('passport');

module.exports = (app) => {
    // Routing attempt to authenticate the user from localhost:5000/auth/google
    app.get(
        '/auth/google', 
        passport.authenticate('google',{
        scope: ['profile','email']
        })
    );

    // Routing after the user has authenticated
    app.get('/auth/google/callback',
        passport.authenticate('google')
    );

    // routing for authentification testing
    app.get('/api/logout',(req,res) => {
        req.logout(); // passport attaches to the req
        res.send(req.user); // send back 
    });

    // req incoming request, res is outgoing response
    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    });
};