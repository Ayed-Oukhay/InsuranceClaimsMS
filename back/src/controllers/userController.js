const UserModel = require('../models/user');

// ---------------------------------- Create and Save a new user ----------------------------------
exports.create = async (req, res) => {

    const user = new UserModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        cin: req.body.cin,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        status: req.body.status
    });

    await user.save().then(data => {
        res.send({
            message: "User created successfully!!",
            user: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

// ---------------------------------- Retrieve all users from the database ----------------------------------
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// ---------------------------------- Find a single User with an id ----------------------------------
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// ---------------------------------- Update a user by id ----------------------------------
exports.update = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Data to update cannot be empty!"
        });
    }

    const id = req.params.id;

    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        } else {
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// ---------------------------------- Delete a user with the specified id ----------------------------------
exports.destroy = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        } else {
            res.send({
                message: "User deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};