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
var VerifyToken = require('../authontication/AuthController.js');
//var obj={};
// router.get('/me', VerifyToken, function(req:any, res:any, next:any) {
//     User.findById(req.userId, { password: 0 }, function (err:any, user:any) {
//       if (err) return res.status(500).send("There was a problem finding the user.");
//       if (!user) return res.status(404).send("No user found.");
//      var obj={
//           id:user.userId,
//           password:user.password
//       }
//       res.status(200).send(user);
//     });
//   });
//send user order
router.post('/send_order', function (req, res, next) {
    console.log("saramee1");
    // User.findById(req.user_id, { password: 0 }, function (err, user) {
    //     if (err)
    //         return res.status(500).send("There was a problem finding the user.");
    //     if (!user)
    //         return res.status(404).send("No user found.");
    //     var id;
    //     console.log(req);
    //     var obj = {
    //         id: req.user_id,
    //         password: user.password
    //     };
    //     console.log(typeof (obj.id));
        //var mongoObjectId = mongoose.Types.ObjectId(obj.id);
        const myorder = req.body;
        console.log(myorder);
        if (!myorder)
            return res.status(400).json({ msg: "problem in order" });
        else if (myorder) {
            // console.log(myorder);
            Order.create({
                // user_id: id,
                order_details: myorder.order_details,
                location_start_lng: myorder.location_start_lng,
                location_start_lat: myorder.location_start_lat,
                location_end_lng: myorder.location_end_lng,
                location_end_lat: myorder.location_end_lat,
                reciver_name: myorder.reciver_name,
                order_notes: myorder.order_notes,
                rate: myorder.rate,
                state: myorder.state,
                date: Date.now(),
                price: myorder.price
            }).then((order) => {
                res.json(console.log(" successfully")).catch((err) => {
                    res.send("error" + err);
                });
            });
        }
        else {
            res.send({ error: "problem" });
            console.log("body is empty");
        }
    // });
});
module.exports = router;
//# sourceMappingURL=customer_order.js.map