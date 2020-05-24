const express = require('express')
const db = require('../../DB/db')
const bodyParser = require('body-parser')
const router = express.Router()
const crypto = require('crypto')
router.use(bodyParser.json())


///FIND USER BY ID
///
///
var user_login_qr = router.post('/user/login_with_qr', (req, res)=>{

    var id = req.body.id.toString()

    var objectId = db.getPrimaryKey(id)

    
    ///SEARCH USER WITH THE ID PROVIDED BY QRCODE
    ///
    ///
    db.getDB().collection('users').find({_id: objectId}).toArray((err, user)=>{
        if(err) {
          console.error(err)
          res.sendStatus(500);
        }
        
        else {
            res.sendStatus(200)
        }
       

 })


})

var user_login_name = router.post('/user/login_whith_name',  (req, res) =>{

  var name = req.body.name.toString()
  var password = req.body.password.toString()
  let emptyArray = []
  
  db.getDB().collection('users').find({ name: name, password: password}).toArray((err, user)=>{
    if(err) {
      console.error(err)
      res.sendStatus(500);

    } else if (user.length ===0){
      res.sendStatus(500); 
    }
    
    else  {
       console.log(user)
       res.sendStatus(200)
    }
   

})
})


module.exports = [user_login_qr, user_login_name]





