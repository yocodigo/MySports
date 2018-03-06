var router = require('express').Router(); 
var db = require("../models");

router.post("/new", function(req, res) {
  var newFan = req.body;

  db.Fan.create({
    name: newFan.name,
    email: newFan.email,
    city: newFan.city,
    team: newFan.team,
    googleID: newFan.googleID
  }).then(function(newFan){
    console.log("A new fan was created " + newFan);
    return res.redirect('/auth/login');
  });
  
}); 

module.exports = router; 