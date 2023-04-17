// ? This file holds the definition of a BaseUser and a user type to store all files related to users
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    // We don't need to specify an Id, as by default, Mongoose adds an _id property to your schemas.
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Single', 'Married', 'Divorced', 'Other'],
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        default: "User"
    }
});

var User = new mongoose.model('User', schema);
module.exports = User;