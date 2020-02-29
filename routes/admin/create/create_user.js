const express = require('express')
const db = require('../../../DB/db')

const bodyParser = require('body-parser')


const router = express.Router()

router.use(bodyParser.json())

router.post("/create_user", async (req, res)=> {
     
  
    request = req.body

    
     db.getDB().collection('users').insertOne(request ,(err, msg)=>{
          if(err){
              console.error(err)
              res.sendStatus(500)
          } else{
            console.log(request+ ' was insert' + msg)
            res.sendStatus(200)
          }
         
     })


  

    

})

module.exports = router