"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
router.post('/api/doPayment/', (req, res) => {
    return stripe.charges
        .create({
        amount: req.body.amount,
        currency: 'usd',
        source: req.body.tokenId,
        description: 'Test payment',
    })
        .then((result) => res.status(200).json(result));
});
module.exports = router;
//# sourceMappingURL=payment.js.map