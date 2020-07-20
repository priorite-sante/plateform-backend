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
           "user_number": results.toString()
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
           "child_number": results.toString()
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
           "today_registrer": results.toString()
          })
        }
      });
    break;
    case "today_hospital": db.getDB().collection('users').countDocuments(
      {userHospital: todayDate}, (err, results) => {
        if(err){
          res.sendStatus(500);
        }else {
          res.json({
           "today_hoapital": results.toString()
          })
        }
      });
    break;
    case "total_hospital": db.getDB().collection('users').countDocuments(
      {userHospital: {}}, (err, results) => {
        if(err){
          res.sendStatus(500);
        }else {
          res.json({
           "total_hospital": results.toString()
          })
        }
      });

    case "child_h":db.getDB().collection('users').countDocuments(
      {children: {type: 1}}, (err, results) => {
        if(err){
          res.sendStatus(500);
        }else {
          res.json({
           "child_h": results.toString()
          })
        }
      });
    
    break;
    case "child_f":db.getDB().collection('users').countDocuments(
      {children: {type: 2}}, (err, results) => {
        if(err){
          res.sendStatus(500);
        }else {
          res.json({
           "child_f": results.toString()
          })
        }
      });

    default: res.sendStatus(404);
    
  }
 




});


module.exports = [user]
