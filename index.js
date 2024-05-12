const express = require('express');
const port = 3100;
const db = require('./config/mongodb.js');

const passport = require('passport');
const passportJWT = require('./config/passport.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

//redirecting routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${port}`);
});
