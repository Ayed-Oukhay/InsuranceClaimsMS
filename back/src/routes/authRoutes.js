const express = require('express');
const AuthController = require('../controllers/authController');
const router = express.Router();
const { verifySignUp } = require("../middlewares/verifySignup");

module.exports = function (app) {
    router.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // ----------- Create user -------------
    router.post('/', [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
    ], AuthController.create);

    // ----------- Login user -------------
    router.post('/login', AuthController.login);
};