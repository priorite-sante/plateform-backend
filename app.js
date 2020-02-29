const express = require('express')
const db = require("./DB/db");

///routes
///
///

///ADMIN
const createUser = require("./routes/admin/create/create_user")
const createHostpital = require("./routes/admin/create/create_hopital")
const adminUserSearch = require("./routes/admin/find/find_user")

///HOSPITAL
const hospital_search_user = require("./routes/hospital/users/search_user")






const app = express()



///ROUTES 
///
///

///ADMIN
app.use(createUser)
app.use(createHostpital)
app.use(adminUserSearch)

///HOSPITAL
app.use(hospital_search_user)






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