const db = require("../models/db");
const ROLES = db.ROLES;
const User = db.user;

// ! --- Checking for duplicate username or email ---
checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (user) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }

        // Email
        User.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (user) {
                res.status(400).send({ message: "Failed! Email is already in use!" });
                return;
            }
            next();
        });
    });
};

// ! --- Checking if the provided role exists ---
checkRolesExisted = (req, res, next) => {
    if (req.body.role) {
        if (!ROLES.includes(req.body.role)) {
            res.status(400).send({
                message: `Failed! Role ${req.body.role} does not exist!`
            });
            return;
        }
    }
    next();
};

// ? --- Verifying the signup process ---
const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
};

module.exports = verifySignUp;
