const express = require('express')
const db = require('../../../DB/db')

const bodyParser = require('body-parser')


const router = express.Router()

router.use(bodyParser.json())



router.post('/hospital_user_search', async (req, res)=>{

    var id = req.body.id.toString()

    var objectId = db.getPrimaryKey(id)

    
    ///SEARCH USER WITH THE ID PROVIDED BY QRCODE
    ///
    ///
    await db.getDB().collection('users').find({_id: objectId}).toArray((err, user)=>{
        if(err) {
          console.error(err)
          res.sendStatus(500);
        }
        
        else {
            res.json(user)
        }
       

 })


})




module.exports = router