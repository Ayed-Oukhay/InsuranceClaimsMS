var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user: {
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['', '', ''],
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    other: {
        type: String
    }
});

var Claim = new mongoose.model('Claim', schema);
module.exports = Claim;