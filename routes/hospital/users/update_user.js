const express = require('express')
const db = require('../../../DB/db')

const bodyParser = require('body-parser')


const router = express.Router()

router.use(bodyParser.json())



router.post('/hospital_user_update',  (req, res)=>{
    
    
    
    var id = req.body.id.toString()

    var objectId = db.getPrimaryKey(id)


    
    db.getDB().collection('users').find({_id: objectId}).toArray((err, theUser) => {
        
        if(err){
            Console.error(err)
        } else{
            var validated = parseInt(theUser[0].validated, 10)

            if( validated == 0){
                db.getDB().collection('users').updateOne({_id: objectId}, {
                    $inc: {
                        "validated": 1
                    }
                })
               
            }else if(validated < 4){
                db.getDB().collection('users').updateOne({_id: objectId}, {
                    $inc: {
                        "validated": +1
                    }
                })
                
            } else{
                console.error('allready CHECKED')
            }
           
            res.send("statut " + validated)

        }

    })
})

module.exports = router