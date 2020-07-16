const express = require("express");
const bodyParser = require("body-parser");
const db = require("../../../database/db")

const router = express.Router();


var user = router.get('/admin/stats/get/user/', (req, res) => {

  let action = req.query.action;
  let todayDate = new Date().toISOString().substring(0, 10);



  switch(action){
    case "user_number" :  db.getDB().collection('users').countDocuments(
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
    break;
    case "child_number":  db.getDB().collection('users').countDocuments(
      {children:{}}, (err, results) => {
        if(err){
          res.sendStatus(500);
        }else {
          res.json({
           "childreen": results.toString()
          })
        }
      }
    );
    break;
    case "today_register":  db.getDB().collection('users').countDocuments(
      {admissionDate: todayDate}, (err, results) => {
        if(err){
          res.sendStatus(500);
        }else {
          res.json({
           "users": results.toString()
          })
        }
      });
    default: res.sendStatus(404);
  }
 




});


module.exports = [user]
