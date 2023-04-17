// ! File to setup and export the different middlewares used

const authJwt = require("./authJWT");
const verifySignUp = require("./verifySignup");

module.exports = {
  authJwt,
  verifySignUp
};