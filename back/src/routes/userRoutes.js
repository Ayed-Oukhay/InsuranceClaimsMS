const UserController = require('../controllers/userController');
const { authJwt } = require("../middlewares/middlewares");

// ? ------------- Using the controller methods ---------------
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // * ----------- Get all users -------------
    app.get('/', UserController.findAll);

    // * ----------- Get a specific user -------------
    app.get('/:id', UserController.findOne);

    // * ----------- Update user -------------
    app.patch('/:id', UserController.update);

    // * ----------- Delete user -------------
    app.delete('/:id', UserController.destroy);

    // module.exports = app;

    // ? --- Testing the API access rights of the current connected user ---
    app.get("/test/all", UserController.allAccess);

    app.get("/test/user", [authJwt.verifyToken], UserController.userBoard);

    app.get("/test/admin", [authJwt.verifyToken, authJwt.isAdmin], UserController.adminBoard);
};