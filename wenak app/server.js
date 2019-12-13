
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const URI ="mongodb+srv://Jar:a!123456789@cluster0-2appk.mongodb.net/test"
//const request = require('request');
var app = express()
var db = require('./database.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var auth = require('./authontication/auth.js');
const cors = require('cors');
app.use('/api/auth', auth);
module.exports = app;
app.use( cors() );






app.listen(process.env.PORT || 1300);
console.log("Partying on port", 1300);