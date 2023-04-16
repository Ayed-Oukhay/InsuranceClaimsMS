// ? To process Authentication & Authorization, we need to check if token is provided, legal or not. 
// ? We get token from x-access-token of HTTP headers, then use jsonwebtoken's verify() function to check if 
// ? the provided role of the user contains the required role or not

const jwt = require("jsonwebtoken");
const db = require("../models");
const Role = db.Role;
const User = db.User;

require("dotenv").config();

// ? --- Verify that the token exists
verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, process.env.jwt_secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};

// ? --- Check if the user has "Admin" rights
isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find(
            {
                _id: { $in: user.role }
            },
            (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                if (role.name === "admin") {
                    next();
                    return;
                }

                res.status(403).send({ message: "Required Admin Role!" });
                return;
            }
        );
    });
};

const authJwt = {
    verifyToken,
    isAdmin
};

module.exports = authJwt;