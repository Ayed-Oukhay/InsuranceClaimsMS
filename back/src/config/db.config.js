const dotenv = require("dotenv");
dotenv.config();

const username = process.env.user;
const password = process.env.password;

module.exports = {
    url: `mongodb+srv://${username}:${password}@claimsdb.gajtt32.mongodb.net/?retryWrites=true&w=majority`
}

