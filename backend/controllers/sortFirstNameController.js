var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// setup user api service
var user = require('../services/user');

//Sort users by first name in ascending number
router.get('/', function(req, res){
  user.sortFirstName({ }, function(err, Response){
    if (err) return res.status(500).send(".");
    res.status(200).send(Response);
  });
});


module.exports = router;
