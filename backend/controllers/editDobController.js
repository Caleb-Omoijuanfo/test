var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// setup user api service
var user = require('../services/user');

//Update user
router.put('/', function(req, res){
  user.editDob({ id:req.body.id, dob: req.body.dob }, function(err, Response){
    if (err) return res.status(500).send("There was a problem updating the date of birth.");
    res.status(200).send(Response);
  });
});



module.exports = router;
