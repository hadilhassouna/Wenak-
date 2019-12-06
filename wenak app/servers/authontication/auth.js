"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('../database.js').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
var VerifyToken = require('./AuthController.js');
const { check, validationResult } = require('express-validator');
router.post('/register', [
    check('mobilenum').isNumeric(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 })
], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    var mobilenum = req.body.mobilenum;
    var password = req.body.password;
    var type = req.body.type;
    const hashedPassword = bcrypt.hashSync(password, 8);
    console.log(req.body.mobilenum);
    User.create({
        mobilenum: mobilenum,
        password: hashedPassword,
        type: type
    }, function (err, user) {
        if (err)
            return res.status(500).send("There was a problem registering the user.");
        // create a token
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
});
//user login
router.post('/login', function (req, res) {
    User.findOne({ mobilenum: req.body.mobilenum }, function (err, user) {
        if (err)
            return res.status(500).send('Error on the server.');
        if (!user)
            return res.status(404).send('No user found.');
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid)
            return res.status(401).send({ auth: false, token: null });
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
});
//get the user
router.get('/me', VerifyToken, function (req, res, next) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err)
            return res.status(500).send("There was a problem finding the user.");
        if (!user)
            return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});
router.get('/logout', function (req, res) {
    res.status(200).send({ auth: false, token: null });
});
router.get("/", (req, res) => {
    res.json({ status: "success", message: "hello" });
});
module.exports = router;
//# sourceMappingURL=auth.js.map