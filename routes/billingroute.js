const KEYS = require('../config/keys');
const stripe = require("stripe")(KEYS.stripeSecretKey);
const checkLogin = require('../middlewares/checkLogin');

module.exports = app =>{
    app.post('/api/stripe', checkLogin, async (req,res) => {
       const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Buying 5 Credits',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();
        
        res.send(user);
    });
};