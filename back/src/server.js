const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const dotenv = require("dotenv");
dotenv.config();


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