const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database scheme
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0}
});

mongoose.model('users', userSchema);