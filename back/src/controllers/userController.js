const UserModel = require('../models/user');


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
            console.log("User not found")
        } else {
            res.send({
                message: "User deleted successfully!"
            });
            console.log("User deleted successfully!");
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// ---------------------------------- Test current user access rights ----------------------------------
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};