const express = require('express')
const db = require('../../../DB/db')

const bodyParser = require('body-parser')


const router = express.Router()

router.use(bodyParser.json())


///FIND USER BY ID
///
///
var findUserById = router.post('/admin_find_user_by_id', async (req, res)=>{

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

///FIND USER BY NAME 
///
///




var findUserByName = router.post('/admin_find_user_by_name', async (req, res)=>{

  var name = req.body.name.toString()


  
  await db.getDB().collection('users').find({ name: name}).toArray((err, user)=>{
      if(err) {
        console.error(err)
        res.sendStatus(500);
      }
      
      else {
          res.json(user)
      }
     

})


})


var getAllUser = router.get('/getalluser',async (req,res)=>{

  await db.getDB().collection('users').find({}).toArray((err, user)=>{
    if(err) {
      console.error(err)
      res.sendStatus(500);
    }
    
    else {
        res.json(user)
    }
   

})
})

var getAllUser = router.get('/getalluser', async(req,res)=>{

  await db.getDB().collection('users').find({}).toArray((err, user)=>{
    if(err) {
      console.error(err)
      res.sendStatus(500);
    }
    
    else {
        res.json(user)
    }
   

})
})




module.exports =[findUserById, findUserByName,  getAllUser ]