const express = require('express')
const db = require('../../../DB/db')

const bodyParser = require('body-parser')


const router = express.Router()

router.use(bodyParser.json())

router.post("/create_hospital", async (req, res)=> {
     
  
     const request = req.body

    
     db.getDB().collection('hospitals').insertOne(request ,(err, status)=>{
         
         console.log(request+ ' was insert' + status)
     })


     await db.getDB().collection('hospitals').find({}).toArray((err, docs)=>{

        res.send(docs)

     })

    

})

module.exports = router