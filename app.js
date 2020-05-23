const express = require('express')
const db = require("./DB/db");

const port = process.env.PORT || 3000;

///routes
///
///

///ADMIN
const createUser = require("./routes/admin/create/create_user")
const adminUserSearch = require("./routes/admin/find/find_user")

///HOSPITAL
const hospital_search_user = require("./routes/hospital/users/search_user")
const hospitalUserUpdate = require("./routes/hospital/users/update_user")

///USER

const userLogin =require("./routes/users/login")






const app = express()



///ROUTES 
///
///

///ADMIN
app.use(createUser)
app.use(adminUserSearch)

///HOSPITAL
app.use(hospital_search_user)
app.use(hospitalUserUpdate)
app.use(userLogin)

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )

    if(req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')

        return res.statusCode(200).json({})
    }
    next()
})





app.get('/', (req, res)=>{
   res.send('you are on priorité-santé')
})




///CONNECT TO DATABASE
///
///

db.connect((err)=>{
    // If err unable to connect to database
    // End application
    if(err){
        console.log('unable to connect to database ' + err);
        process.exit(1);
    }
    // Successfully connected to database
    // Start up our Express Application
    // And listen for Request
    else{
        app.listen(port,()=>{
            console.log('connected to database, app listening on port 3000');
        });
    }
});