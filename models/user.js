const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database scheme
const userSchema = new Schema({
    googleId: String,
    name: String
});

// Tell mongoose we want a new collection called users
mongoose.model('users', userSchema);