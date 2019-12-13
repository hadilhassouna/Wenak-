const express = require('express');
const router= express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



router.post('/api/doPayment/', (req: any, res:any) => {
  return stripe.charges
    .create({
      amount: req.body.amount, // Unit: cents
      currency: 'usd',
      source: req.body.tokenId,
      description: 'Test payment',
    })
    .then((result:any) => res.status(200).json(result));
});

export {}
module.exports = router;