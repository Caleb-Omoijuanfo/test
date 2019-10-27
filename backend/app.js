// app.js

var express = require('express');
var app = express();
var cors = require('cors');

// Allow CORS
app.use(cors());
app.options('*', cors());
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static('public'));

var userController = require('./controllers/userController');
app.use('/user', userController);

module.exports = app;
