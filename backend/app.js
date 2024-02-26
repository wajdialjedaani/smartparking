require('module-alias/register')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// k=async ()=>{
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash("Soncur@030120", salt);
//     console.log("ddd",hashedPassword)
// }
// k();

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const dotenv = require('dotenv');
dotenv.config()
mongoose.set("strictQuery", false);
mongoose.promise = global.Promise
app.use(cors());
require('./src/config/database')
require('./src/models/models')
app.use(require('./src/routes'))

// Import and use the logRequest middleware
const logRequest = require('@middleware/logrequest'); // Adjust the path as needed
app.use(logRequest);
app.use(require('./src/routes'))

const PORT = process.env.PORT
app.listen(PORT, function () {
  console.log('Server listening on port ', PORT);
})