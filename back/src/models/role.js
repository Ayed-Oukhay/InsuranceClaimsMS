// ? This file holds the definition of a BaseUser and a user type to store all files related to users
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String
})

var Role = new mongoose.model('Role', schema);
module.exports = Role;