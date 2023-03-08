const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// ? ------------------ DB configuration & connection ------------------
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false); // ? This is added to avoid the DeprecationWarning
mongoose.connect(dbConfig.url, {
    // ? These are also added to avoid the DeprecationWarning
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});



// ? ------------------ routes ------------------
// const claimRoutes = require('./routes/claimRoutes.js');
// const adminRoutes = require('./routes/adminRoutes.js');
const userRoutes = require('./routes/userRoutes.js');



// ? ------------------ Middlewares ------------------
app.use(cors()); // Enable cross-origin resource sharing
app.use(bodyParser.json()); // Parse incoming request bodies as JSON


// ? ------------------ using the routes ------------------
// app.use('/', homepage);
// app.use('/claims', claimRoutes);
// app.use('/admin', adminRoutes);
app.use('/user', userRoutes);


// ? ---------- exporting the app to use it in the server.js file to run the main server (app) ----------
module.exports = app;