const mongoose = require('mongoose');

const signupTemplate = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String, 
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});



/*

    REMMEBER!!!!!!!!!!!!!!!!!!
    you can put unique = true
    for EMAIL
*/




module.exports = mongoose.model('User', signupTemplate);