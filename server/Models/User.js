const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
    // this needs to be built out more I think
})

// I need to create a password bcrypt hash here, will come around to that later

const User = mongoose.model('User', userSchema);

module.exports = User;