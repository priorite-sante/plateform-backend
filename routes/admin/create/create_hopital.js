const express = require('express')
const db = require('../../../DB/db')

const bodyParser = require('body-parser')


const router = express.Router()

router.use(bodyParser.json())

router.post("/create_hospital", async (req, res)=> {
     
  
     const request = req.body

    
     db.getDB().collection('hospitals').insertOne(request ,(err, status)=>{
         
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