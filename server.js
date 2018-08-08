const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// var mongoose = require('mongoose');
// var morgan = require('morgan');

//var methodOverride = require('method-override');

// var config = require('./app/config/config');

// //log every request to console
// app.use(morgan('dev'));

// //Connect MongoDB to app, using mongoose 
// mongoose.connect(config.db)

// app.configure(function () {

// });

mongoose.connect("mongodb://localhost:27017/blogPostNode")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("Listening at 3000")
});

app.get('/', function (req, res) {
    res.send("zzzzs")
});