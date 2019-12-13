"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const URI = "mongodb+srv://Jar:a!123456789@cluster0-2appk.mongodb.net/test";
const Pusher = require("pusher");
//const request = require('request');
const app = express();
const db = require("./database.js");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//use authauntications
const auth = require("./authontication/auth.js");
app.use("/api/auth", auth);
///use the driver
const order_d = require("./Order_Driver/order_d.js");
app.use("/api/driver", order_d);
///use the customer
const customer = require("./Customer/customer_order.js");
app.use("/api/customer", customer);
//use the notifications
const notifications = require("./notifications.js");
app.use("/notifi", notifications);
module.exports = app;
app.get("/", function(req, res) {
  res.send("Hello world");
});
app.listen(process.env.PORT || 4000);
console.log("Partying on port", 4000);
//# sourceMappingURL=server.js.map
