const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const auth = require('./authontication/auth.js');
const path = require('path')
const db = require('./database.js');
const order_d = require('./Order_Driver/order_d.js');
const URI = "mongodb+srv://Jar:a!123456789@cluster0-2appk.mongodb.net/test";
//const request = require('request');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/order_d', order_d);
app.use(express.static(__dirname +'/'));
app.use('/api/auth', auth);

app.get('/hello', function (req, res) {
    res.send('Hello worlduu');
});


// module.exports = app;

var port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}!`))
//# sourceMappingURL=server.js.map
//