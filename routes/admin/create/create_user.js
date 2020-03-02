const express = require('express')
const db = require('../../../DB/db')

const bodyParser = require('body-parser')


const router = express.Router()

router.use(bodyParser.json())


///create user
///
///
var createUser = router.post("/create_user", async (req, res)=> {
     
  
    request = req.body

    
     db.getDB().collection('users').insertOne(request ,(err, msg)=>{
          if(err){
              console.error(err)
              res.sendStatus(500)
          } else{
            res.sendStatus(200)
          }
         
     })   

})


///create hospital
///
///
var createHospital = router.post("/create_hospital", async (req, res)=> {
     
  
  const request = req.body

 
  db.getDB().collection('hospitals').insertOne(request ,(err, status)=>{
      
     if(err){
         console.error(err)
         res.sendStatus(500)
     } else{
       console.log(request+ ' was insert' + status)
       res.sendStatus(200)
     }

 })

 

})

module.exports = [createUser,createHospital]