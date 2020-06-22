const express = require("express");
const bodyParser = require("body-parser");
const db =  require("../../../database/db")

const router = express.Router();


var user = router.get('/admin/stats/get/user/',(req, res) =>{

    let action = req.query.action;
    
    db.getDB().collection('userStats').find({name: action}).toArray((err, action)=>{
        if(err) {
          console.error(err)
          res.sendStatus(500);
        }
        
        else {
            res.json(action)
        }
       
  
  })
    
    
})
