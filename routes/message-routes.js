//Messages =====================================
var router = require('express').Router(); 
var db = require("../models");

// Create New Message =============================
router.post("/", function(req, res) {
    var newMessage = req.body;   

    db.Message.create({
      text: newMessage.message,
      user: newMessage.message
    }).then(function(message){
      //console.log("A new message was created " + newMessage.message);
      res.render('index', message);
    });
  });
  
  // Get all Messages ============================
  router.get("/", function(req, res) {
    db.Message.findAll({}).then(function(event){

     var newMessage = {
        newMessage: message
    };
     res.render('index', newMessages)
      })
    });
     module.exports = router; 
