const AuthController = require('../controllers/authController');
const { verifySignUp } = require("../middlewares/middlewares");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // ----------- Create user -------------
    app.post('/signup', [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
    ], AuthController.signup);

    // ----------- Login user -------------
    app.post('/login', AuthController.login);
};