var router = require('express').Router();
var db = require("../models");

//MiddleWare to check if the user is logged in or not.
var authCheck = function(req, res, next) {
  if (!req.user) {
    //If the user is not logged In 
    res.redirect('/auth/login');
  } else {
    next();
  }
}


// router.get("/", function(req, res) {
//   if (req.user) {
//     res.render("index", { user: req.user });
//   } else {
//     res.redirect('/auth/login');
//   }
//   //res.render("index", {user: req.user});
// });


router.get("/", authCheck, function(req, res) {
  db.Fan.findOne({
    where: {
      googleID: req.user.googleID
    }
  }).then(function(dbFan) {
    //If the Fan is in the database
    if (dbFan) {
      db.Event.findAll({}).then(function(event){
        console.log(dbFan.dataValues)
        var newObject = {
           newEvent: event,
           fan: dbFan.dataValues
        };
        // console.log('testdlksldjfa;s', newObject.newEvent);
        // res.render('events', newObject);
        res.render("index", newObject);
        })
    } else {
      //otherwise they must signup
      return res.redirect('/auth/signup');
    }
  });
});

module.exports = router;