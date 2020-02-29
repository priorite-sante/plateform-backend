const express = require('express')
const db = require('../../../DB/db')

const bodyParser = require('body-parser')


const router = express.Router()

router.use(bodyParser.json())



router.post('/hospital_user_update', async (req, res)=>{
    
    var validated = req.body.validated
    
    var id = req.body.id.toString()

    var objectId = db.getPrimaryKey(id)


    
    await  db.getDB().collection('users').findAndModify({
        query : {id: objectId},
        update: { $inc: { score: 1 } }
    })
})