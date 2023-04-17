const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const dotenv = require("dotenv");
dotenv.config();

const db = require("./models/db");
const Role = db.role;

// ? ------------------ Creating and adding the user roles into the DB (if they don't exist) ------------------
Role.estimatedDocumentCount((err, count) => {
  if (!err && count === 0) {
    new Role({
      name: "user"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added 'user' to roles collection");
    });

    new Role({
      name: "admin"
    }).save(err => {
      if (err) {
        console.log("error", err);
      }
      console.log("added 'admin' to roles collection");
    });
  }
});


// ? -------- checking if Node.js loaded the environmental variable PORT into process.env. --------
// ! -------- If so, this parses its value as a number type and creates an instance of an Express application; otherwise, it exits the application --------
if (!process.env.PORT) {
  process.exit(1);
}


// ? -------- start the server --------
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
}); 