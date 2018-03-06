//Events =====================================
var router = require('express').Router(); 
var db = require("../models");

// Create New Event =============================
router.post("/", function(req, res) {
    var newEvent = req.body;
    
    console.log('test', newEvent);
  
    db.Event.create({
      title: newEvent.title,
      description: newEvent.description,
      date: newEvent.date,
      location: newEvent.location,
      attendees: newEvent.attendees
    }).then(function(newEvent){
      console.log("A new event was created " + newEvent.title);
      res.render('event', newEvent);
    });
  });
  
  // Get all Events ============================
  router.get("/", function(req, res) {
    db.Event.findAll({}).then(function(event){
     var newEvents = {
        newEvent: event
    };
     res.render('event', newEvents)
      })
    });
    module.exports = router; 
