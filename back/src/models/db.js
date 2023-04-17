// ! File to setup and export the whole DB with its differnet tables

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false); // ? This is added to avoid the DeprecationWarning


const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role");

db.ROLES = ["user", "admin"];

module.exports = db;