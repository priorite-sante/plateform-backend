const express = require('express');
const cors = require('cors');
const db = require("./database/db");
const bodyParser = require('body-parser');
const helmet = require('helmet');


const routes = require("./routes/routes");
const utils= require("./utils/utils");



const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads'));

app.use(routes);
app.use(utils);







app.get('/', (req, res) => {
    res.send('you are on priorité-santé');
})




///CONNECT TO DATABASE
///
///

db.connect((err) => {
    if (err) {
        console.log('unable to connect to database ' + err);
        process.exit(1);
    }
    else {
        app.listen(port, () => {
            
            console.log('connected to database, app listening on port 3000');
     
        });
    }
});