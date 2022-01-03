const passport = require('passport');

module.exports = (app) => {
    // Routing attempt to authenticate the user from localhost:5000/auth/google
    app.get(
        '/auth/google', 
        passport.authenticate('google',{
        scope: ['profile','email'],
        prompt: 'select_account'
        })
    );

    // Routing after the user has authenticated
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req,res) => {
            res.redirect('/surveys');
        }
    );

    // routing for authentification testing
    app.get('/api/logout',(req,res) => {
        req.logout(); // passport attaches to the req
        res.redirect('/');
    });

    // req incoming request, res is outgoing response
    // Returns a user model
    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    });
};