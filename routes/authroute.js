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
};