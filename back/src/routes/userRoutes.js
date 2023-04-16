const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();


// ? ------------- Using the controller methods ---------------
module.exports = function (app) {
    router.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // * ----------- Get all users -------------
    router.get('/', UserController.findAll);

    // * ----------- Get a specific user -------------
    router.get('/:id', UserController.findOne);

    // * ----------- Update user -------------
    router.patch('/:id', UserController.update);

    // * ----------- Delete user -------------
    router.delete('/:id', UserController.destroy);

    // module.exports = router;

    // ? --- Testing the API access rights of the current connected user ---
    router.get("/test/all", UserController.allAccess);

    router.get("/test/user", [authJwt.verifyToken], UserController.userBoard);

    router.get("/test/admin", [authJwt.verifyToken, authJwt.isAdmin], UserController.adminBoard);
};