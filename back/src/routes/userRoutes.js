const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();


// ? ------------- Using the controller methods ---------------

// ----------- Create user -------------
router.post('/', UserController.create);

// ----------- Get all users -------------
router.get('/', UserController.findAll);

// ----------- Get a specific user -------------
router.get('/:id', UserController.findOne);

// ----------- Update user -------------
router.patch('/:id', UserController.update);

// ----------- Delete user -------------
router.delete('/:id', UserController.destroy);



module.exports = router;