const db = require("../models/db");
const User = db.user;
const Role = db.role;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require("dotenv").config();

// ? ---------------------------------- Signup a new user ----------------------------------
exports.signup = async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // ? --- Creating the User object ---
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        status: req.body.status,
        role: req.body.role
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        // ! Checking if the provided role is a valid one
        if (req.body.role) {
            Role.find({ name: { $in: req.body.role } }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                user.role = role.map(role => role._id);
                user.save(err => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
                    res.send({ message: "User was registered successfully!" });
                });
            }
            );
        } else {
            // ! if it's not, the user is registered as a 'user'
            Role.findOne({ name: "user" }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                user.role = role._id;
                user.save(err => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
                    res.send({ message: "User was registered successfully!" });
                });
            });
        }
    });

    // await user.save().then(data => {
    //     res.send({
    //         message: "User created successfully!!",
    //         user: data
    //     });
    //     console.log("User created successfully!!");
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while creating user"
    //     });
    //     console.log(err.message);
    // });

};

// ? ---------------------------------- Login user ----------------------------------
exports.login = async (req, res) => {
    const { username, password } = req.body;

    // ? check if username and password are provided
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    // ? lookup user in database
    const user = await UserModel.findOne({ username });
    // console.log(user);

    // ? check if user exists
    if (!user) {
        return res.status(401).send('Invalid username or password');
    }

    // ? check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).send('Invalid username or password');
    }

    // ? set user in session (Creating the JWT token)
    // ! The sign() function uses algorithm that needs a secret key (as String) to encode and decode token, and this token in our case expires after 24hours
    const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, { expiresIn: 86400 });

    // ? Adding the role
    var authorities = [];
    authorities.push("ROLE_" + user.role.name.toUpperCase());

    // ? returning the request's response
    res.status(200).json({
        status: 'user authenticated successfully',
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        accessToken: token
    });
    console.log('user authenticated successfully: ', token);
};