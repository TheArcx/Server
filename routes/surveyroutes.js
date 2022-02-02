const mongoose = require('mongoose');
const checkLogin = require('../middlewares/checkLogin');
const requireCredit = require('../middlewares/requireCredit');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', checkLogin, requireCredit, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
    });
};