import { func } from "prop-types";

const express = require('express');
const router= express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const Order = require('../database.js').Order;
const jwt = require('jsonwebtoken');
const config = require('../config');
var VerifyToken = require('../authontication/AuthController.js');

//get all orders that state is pending
router.get('/allorder_d', function (req:any, res:any){
    Order.find({state: "pending"}).exec((err:any,order:any) => { 
        if(err){
          console.log(err);
          req.send()
        }
        res.json(order)});
})
//get the current order
router.get('/current_order_d',VerifyToken,function (req:any, res:any){
    Order.find({state: "prepared"}).exec((err:any,order:any) => { 
        if(err){
          console.log(err);
          req.send()
        }
        res.json(order)});
})
//get the previous orders
router.get('/previous_order_d',VerifyToken,function (req:any, res:any){
    Order.find({state: "previous"}).exec((err:any,order:any) => { 
        if(err){
          console.log(err);
          req.send()
        }
        res.json(order)});
})
//accept the user order
router.post('/accept_order',VerifyToken,function (req:any, res:any){
    //const id = req.body.order_id;

})

export{}
module.exports = router;



