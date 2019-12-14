"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('../database.js').User;
const jwt = require('jsonwebtoken');
const config = require('../config');
const Order = require('../database.js').Order;
const ObjectId = require('mongodb').ObjectID;
var VerifyToken = require('../authontication/AuthController.js');
//
///send order.
////
router.post("/send_order", VerifyToken, function (req, res, next) {
    //var myId = JSON.parse(req.userId);
    User.findById(req.userId), { password: 0 }, function (err, user) {
        if (err)
            return res.status(500).send("There was a problem finding the user.");
        if (!user)
            return res.status(404).send("No user found.");
        console.log(req);
        var id = ObjectId(JSON.parse(req.userId));
        console.log(id);
        const myorder = req.body;
        console.log(myorder);
        if (!myorder)
            return res.status(400).json({ msg: "problem in order" });
        else if (myorder) {
            Order.create({
                user_id: id,
                driver_id: ObjectId("0"),
                order_details: myorder.order_details,
                location_start_lng: myorder.location_start_lng,
                location_start_lat: myorder.location_start_lat,
                location_end_lng: myorder.location_end_lng,
                location_end_lat: myorder.location_end_lat,
                reciver_name: myorder.reciver_name,
                recieverPhone: myorder.recieverPhone,
                order_notes: myorder.order_notes,
                rate: myorder.rate,
                state: "pending",
                date: Date.now(),
                price: myorder.price
            }, function (err, req, res, next) {
                if (err) {
                    console.log(err);
                    res.send("error");
                }
                console.log("success");
                res.send("success in order");
            });
        }
    };
});
///get the current order to the specific customer.
router.get("/get_current_order", VerifyToken, function (req, res, next) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err)
            return res.status(500).send("There was a problem finding the user.");
        if (!user)
            return res.status(404).send("No user found.");
        var id = user._id;
        Order.find({ state: "current", user_id: ObjectId(id) }).exec((err, order) => {
            if (err) {
                console.log(err);
                req.send();
            }
            res.json(order);
        });
    });
});
//get the previous orders
router.get("/get_previous", VerifyToken, function (req, res, next) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err)
            return res.status(500).send("There was a problem finding the user.");
        if (!user)
            return res.status(404).send("No user found.");
        var id = user._id;
        Order.find({ state: "delivered", user_id: ObjectId(id) }).exec((err, order) => {
            if (err) {
                console.log(err);
                req.send();
            }
            res.json(order);
        });
    });
});
module.exports = router;
//# sourceMappingURL=customer_order.js.map