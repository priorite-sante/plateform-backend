const express = require('express');
const db = require("./database/db");

const port = process.env.PORT || 3000;

///routes
///

const create = require("./routes/admin/create");
const adminUserSearch = require("./routes/admin/find_user");

///HOSPITAL

const hospitalUserUpdate = require("./routes/hospital/user_verification");

///USER

const userLogin = require("./routes/users/login");







const app = express()



///ROUTES 
///
///

///ADMIN
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')

        return res.statusCode(200).json({})
    }
    next()
})


app.use(create)
app.use(adminUserSearch)

///HOSPITAL

app.use(hospitalUserUpdate)
app.use(userLogin)





app.get('/', (req, res) => {
    res.send('you are on priorité-santé')
})




///CONNECT TO DATABASE
///
///

db.connect((err) => {
    // If err unable to connect to database
    // End application
    if (err) {
        console.log('unable to connect to database ' + err);
        process.exit(1);
    }
    // Successfully connected to database
    // Start up our Express Application
    // And listen for Request
    else {
        app.listen(port, () => {
            console.log('connected to database, app listening on port 3000');
        });
    }
});