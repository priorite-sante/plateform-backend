const express = require('express')
const db = require('../../../DB/db')

const bodyParser = require('body-parser')


const router = express.Router()

router.use(bodyParser.json())

router.post("/create_user", async (req, res)=> {
     
  
    request = req.body

    
     db.getDB().collection('users').insertOne(request ,(err, status)=>{
         
         console.log(request+ ' was insert' + status)
     })


     await db.getDB().collection('users').find({}).toArray((err, docs)=>{

        res.send(docs)

     })

    

})

module.exports = router