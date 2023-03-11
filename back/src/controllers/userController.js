const UserModel = require('../models/user');
/* const cloudinary = require('cloudinary').v2;
require("dotenv").config(); */

// ---------------------------------- Create and Save a new user ----------------------------------
exports.create = async (req, res) => {

    // ? --- Using Cloudinary to upload the user's profile picture ---
    /* cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    });
    async function handleUpload(file) {
        const res = await cloudinary.uploader.upload(file, {
            resource_type: "auto",
        });
        return res;
    } */
    // ? ---------------------------------------------------------------

    // ? --- Creating the User object ---
    const user = new UserModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        cin: req.body.cin,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        status: req.body.status,
        img: req.body.img
    });

    await user.save().then(data => {
        res.send({
            message: "User created successfully!!",
            user: data
        });
        console.log("User created successfully!!");
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
        console.log(err.message);
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