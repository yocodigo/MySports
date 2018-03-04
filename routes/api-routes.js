var router = require('express').Router(); 
var db = require("../models");
// Routes
// =============================================================

  // If a user sends data to add a new character...
router.post("/new", function(req, res) {
  // Take the request...
  var newFan = req.body;

  // Create a routeName
  //var routeName = character.name.replace(/\s+/g, "").toLowerCase();
  console.log("In the API Method");
  // Then add the character to the database using sequelize
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

  //res.redirect('/auth/login');
});

module.exports = router; 