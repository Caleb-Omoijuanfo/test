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

var sortFirstNameController = require('./controllers/sortFirstNameController');
app.use('/user/fa', sortFirstNameController);

var sortSurNameController = require('./controllers/sortSurNameController');
app.use('/user/sa', sortSurNameController);

var editAgeController = require('./controllers/editAgeController');
app.use('/user/age', editAgeController);

var editDobController = require('./controllers/editDobController');
app.use('/user/dob', editDobController);

var editFirstNameController = require('./controllers/editFirstNameController');
app.use('/user/firstName', editFirstNameController);

var editLastNameController = require('./controllers/editLastNameController');
app.use('/user/lastName', editLastNameController);

var editHeightController = require('./controllers/editHeightController');
app.use('/user/height', editHeightController);

var editWeightController = require('./controllers/editWeightController');
app.use('/user/weight', editWeightController);

module.exports = app;
