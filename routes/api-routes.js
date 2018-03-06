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

// Get All Usernames For Event Form ===================
router.get("/new", function(req, res) {
  db.Fan.findAll({}).then(function(res){   
    var opts = '';
    for(i=0; i<res.length; i++){
      fanName = (res[i].dataValues.name);
      console.log(fanName);
      // opts += '<option>' + this + '</option>';
      // $('.option-menu').html(opts);
    } 
  });
}); 

module.exports = router; 