const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const db = require('../../database/db');
const router = express.Router();


router.use(bodyParser.json())


var adminLogin = router.post('/admin/login', (req, res) => {

    var email = req.body.email.toString()
    var password = req.body.password.toString()
    

    db.getDB().collection('admin').find({ email: email, password: password }).toArray((err, user) => {
        if (err) {
            console.error(err)
            res.sendStatus(500);

        } else if (user.length === 0) {
            res.sendStatus(500);
        }

        else {
            console.log(user)
            res.sendStatus(200)
        }

    })
});


module.exports = [adminLogin];


