var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// setup user api service
var user = require('../services/user');

//insert user
router.post('/', function(req, res){
  user.insert({firstName: req.body.firstName, surName: req.body.surName, dob: req.body.dob, age:req.body.age, height:req.body.height, weight:req.body.weight}, function(err, Response){
    if (err) return res.status(500).send("There was a problem inserting user data");
    res.status(200).send(Response);
  });
});

//Find all users
router.get('/', function(req, res){
  user.findAll({ }, function(err, Response){
    if (err) return res.status(500).send("There was a finding users.");
    res.status(200).send(Response);
  });
});

//Delete user
router.delete('/', function(req, res){
  user.delete({ id:req.body.id }, function(err, Response){
    if (err) return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send(Response);
  });
});

//Update user
router.put('/', function(req, res){
  user.edit({ _id:req.body._id, firstName: req.body.firstName }, function(err, Response){
    if (err) return res.status(500).send("There was a problem updating the user.");
    res.status(200).send(Response);
  });
});



module.exports = router;
