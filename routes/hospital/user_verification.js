const express = require('express');
const bodyParser = require('body-parser');
const db = require('../../db/db');



const router = express.Router();

router.use(bodyParser.json());



router.post('/hospital_user_update', async (req, res)=>{
    
    
    
    var id = req.body.id.toString();

    var objectId = db.getPrimaryKey(id);


    
    db.getDB().collection('users').find({_id: objectId}).toArray((err, theUser) => {
        
        if(err){
            Console.error(err);
            res.end(500);
        } else{
            var validated = parseInt(theUser[0].validated, 10);

            if( validated == 0){
               
                db.getDB().collection('users').updateOne({_id: objectId}, {
                    $inc: {
                        "validated": 1
                    }
                })

                res.sendStatus(200)
               
            }else if(validated < 4){
                db.getDB().collection('users').updateOne({_id: objectId}, {
                    $inc: {
                        "validated": +1
                    }
                })

                res.sendStatus(200)
                
            } else{
                console.error('allready CHECKED')
                res.sendStatus(403)
            }
           
          

        }

       


    })
})

module.exports = router