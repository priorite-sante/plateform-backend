const moongoDb = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const db = require("./DB/db");

///routes
///
///
const createUser = require("./routes/admin/create/create_user")
const createHostpital = require("./routes/admin/create/create_hopital")



const app = express()



///ROUTES 
///
///

app.use(createUser)
app.use(createHostpital)






app.post('/', (req, res)=>{
    
    
    res.json(req.body)
})




///CONNECT TO DATABASE
///
///

db.connect((err)=>{
    // If err unable to connect to database
    // End application
    if(err){
        console.log('unable to connect to database');
        process.exit(1);
    }
    // Successfully connected to database
    // Start up our Express Application
    // And listen for Request
    else{
        app.listen(3000,()=>{
            console.log('connected to database, app listening on port 3000');
        });
    }
});