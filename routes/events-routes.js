//Events =====================================
var router = require('express').Router(); 
var db = require("../models");

// Create New Event =============================
router.post("/", function(req, res) {
    var newEvent = req.body; 
  
    db.Event.create({
      title: newEvent.title,
      description: newEvent.description,
      date: newEvent.date,
      location: newEvent.location,
      attendees: newEvent.attendees
    }).then(function(newEvent){
      console.log("A new event was created " + newEvent.title);
      //res.render('event', newEvent);
      res.end();
    });
  });
  
  // Get all Events ============================
  router.get("/", function(req, res) {
    db.Fan.findOne({
      where: {
        googleID: req.user.googleID
      }
    }).then(function(dbFan) {
      //If the Fan is in the database
      
      db.Event.findAll({}).then(function(event){
        var newObject = {
           newEvent: event,
           fan: dbFan
        };
        console.log('testdlksldjfa;s', newObject.newEvent);
        res.render('events', newObject);
        })
      });
      //  if (dbFan) {
      //   res.render("index", dbFan.dataValues);
      // } else {
      //   //otherwise they must signup
      //   return res.redirect('/auth/signup');
      // }
    });

    
    module.exports = router; 
