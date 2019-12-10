import { func } from "prop-types";

const express = require('express');
const router= express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('../database.js').User;
const jwt = require('jsonwebtoken');
const config = require('../config');
const Order = require('../database.js').Order;
const ObjectId = require('mongodb').ObjectID;
var VerifyToken = require('../authontication/AuthController.js');

//get all orders that state is pending
router.get('/allorder_d', function (req:any, res:any){
    Order.find({state: "pending"}).exec((err:any,order:any) => { 
        if(err){
          console.log(err);
          req.send()
        }
        res.json(order)});
        var id = req.user_id;
        
})

//accept the order
router.post('/accept_order',VerifyToken,function(req:any, res:any,next: any){
 
  User.findById(req.userId, { password: 0 }, function (err:any, user:any) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
     var id = user._id;
    // var order = {
    //   driver_id:id
    // }
    var id_order =req.body._id;
    console.log(id_order);
    console.log(id);

    Order.findOneAndUpdate({_id : ObjectId(id_order)}, {$set: {driver_id: ObjectId(id)}},{useFindAndModify: false}).then((data:any) =>{
      if(data === null){
          throw new Error('Order Not Found');
      }
      res.json({ message: 'Order updated!' })
      console.log("New order data", data);
  }).catch( (error:any) => {
      /*
          Deal with all your errors here with your preferred error handle middleware / method
       */
      res.status(500).json({ message: 'Some Error!' })
      console.log(error);
  }); 
    
    
    
  //   {new: true}, (err:any, doc:any) => {
  //     if (err) {
  //         console.log("Something wrong when updating data!");
  //     }
  
  //     console.log(doc);
  // });
    // Order.findOneAndUpdate(
    //   {"_id" : ObjectId(id_order) },
    //   { $set: { driver_id:ObjectId(id)} })
   
    // Order.findByIdAndUpdate(id_order, submission, {}, function (err, submission) {
    //   if (err) {
    //       console.log('error= ' + err);
    //       return err;
    //   }else{
    // Order.updateOne({"_id":ObjectId(id_order)},function(err:any, req:any, res:any, next:any){
    //   if (err) {
    //     console.log(err);
       
    // }
     //console.log("success")
    })

    //Order.find({_id: id_order})
      // Order.update(
      //   {_id: ObjectId(id_order)},
      //   { $set:
      //     {
      //       driver_id:ObjectId(id)
      //       },
      //     function (err:any, order:any) {
      //       if (err)
      //           return res.status(500).send("There was a problem in adding the driver to order");
      //       if (!order)
      //           return res.status(404).send("No order found");
      //       console.log(req); 
      //   }

        
      //  });
     // }
    });
  
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



