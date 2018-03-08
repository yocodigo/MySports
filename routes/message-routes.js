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
      console.log("A new message was created " + newMessage.message);
      res.render('index', newMessage );
    });
  });
  
 // Get all Messages ============================
  router.get("/", function(req, res) {
      console.log('test')
    db.Message.findAll({}).then(function(message){

        var newMessage = {
            text: message
        };
    res.render('index', newMessage)
      })
    });
     module.exports = router; 
