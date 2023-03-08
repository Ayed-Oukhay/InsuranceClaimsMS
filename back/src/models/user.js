/* User properties:
- Id (wallet ID probably)
- username
- password
- First name
- Last name
- CIN
- Num raison sociale
- Tel
- Address
- Status
- Email
- Occupation
- Carte grise (?)
- img
- ...
 */

// ? This file holds the definition of a BaseUser and a user type to store all files related to users
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    // We don't need to specify an Id, as by default, Mongoose adds an _id property to your schemas.
    /* walletAddresses: {
		type: [String],
		required: true,
		unique: true,
		lowercase: true
	}, */
    /* username: {
        type: String,
        required: true
    },
	password: {
		type: String,
        required: true
	}, */
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    cin: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Single', 'Married', 'Divorced', 'Other'],
    },
    // img:{
    //     type: String,
	// 	   default: ""
    // },
    // occupation: {
    //     type: String,
    //     required: true
    // }
});

var User = new mongoose.model('User', schema);
module.exports = User;