var router = require('express').Router();
var db = require("../models");

//MiddleWare to check if the user is logged in or not.
var authCheck = function(req, res, next) {
  if (!req.user) {
    res.redirect('/auth/login'); //If the user is not logged In 
  } else {
    next();
  }
}

router.get('/signUpPage', function(req, res){
  res.render("SignUpPage");
});

router.get("/", authCheck, function(req, res) {
  db.Fan.findOne({
    where: {
      googleID: req.user.googleID
    }
  }).then(function(dbFan) {
    //If the Fan is in the database
    if (dbFan) {
      db.Event.findAll({}).then(function(event){
        db.Message.findAll({}).then(function(message){

        var newObject = {
           newEvent: event,
           fan: dbFan.dataValues,
           message: message
        };
      
        res.render("index", newObject);
      });
    });
        } else {
      //otherwise they must signup
      return res.redirect('/auth/signup');
        }
    });
  });

module.exports = router;