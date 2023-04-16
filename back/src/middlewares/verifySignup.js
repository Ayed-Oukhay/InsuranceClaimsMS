const UserModel = require('../models/user');
const RoleModel = require('../models/role');

// ! --- Checking for duplicate username or email ---
checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    UserModel.findOne({
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
        UserModel.findOne({
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
        if (!RoleModel.includes(req.body.role)) {
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
