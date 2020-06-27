const express = require("express");
const bodyParser = require("body-parser");
const db = require("../../../database/db")

const router = express.Router();


var user = router.get('/admin/stats/get/user/', (req, res) => {

  let action = req.query.action;

  db.getDB().collection('users').countDocuments(
    {}, (err, results) => {
      if(err){
        res.sendStatus(500);
      }else {
        res.json({
         "users": results.toString()
        })
      }
    }
  );




});


module.exports = [user]
