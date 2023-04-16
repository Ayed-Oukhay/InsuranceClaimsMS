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
const authRoutes = require('./routes/authRoutes.js');



// ? ------------------ Middlewares ------------------
// ! Adding some security to only allow Client-side requests coming from localhost:3006 (which is our frontend app) and not from anywhere
var corsOptions = {
    origin: "http://localhost:3006"
};
app.use(cors(corsOptions)); // Enable cross-origin resource sharing

app.use(bodyParser.json({ limit: '10mb' })); // Parse incoming request bodies as JSON
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));



// ? ------------------ using the routes ------------------
// app.use('/', homepage);
// app.use('/claims', claimRoutes);
// app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);


// ? ---------- exporting the app to use it in the server.js file to run the main server (app) ----------
module.exports = app;