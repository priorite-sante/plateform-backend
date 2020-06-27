const express = require('express');
const cors = require('cors');
const db = require("./database/db");
const bodyParser = require('body-parser');
const helmet = require('helmet');

///routes
///
const create = require("./routes/admin/create");
const adminUserSearch = require("./routes/admin/find_user");
///HOSPITAL
const hospitalUserUpdate = require("./routes/hospital/user_verification");
///USER
const userLogin = require("./routes/users/login");
const adminLogin = require("./routes/admin/login")




///UTILS
const uploadImage = require("./utils/upload_image");



const app = express();


const port = process.env.PORT || 3000;

///ROUTES 
///
///

///ADMIN
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/uploads', express.static('uploads'));

app.use(uploadImage)


app.use(create);
app.use(adminUserSearch);

///HOSPITAL

app.use(hospitalUserUpdate);
app.use(userLogin);

app.use(adminLogin);





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