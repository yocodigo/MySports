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

router.get('/twitter', function(req, res){
  var Twitter = require("twitter");

  var twitterKeys = {
  consumer_key: 'dkwToGh1uUYl7GBrkrJu0n3MQ',
  consumer_secret: 'l4eao34oeb96tA63JZHYlDEoYcOLmLQ0VLDBYIdvR7nSEReUoh',
  access_token_key: '2807407982-N87cdI46rKU3GPDMzv5VC6sxmEuZxZzoN2OyXMW',
  access_token_secret: 'dEhzJED4AYvCAnCccq0FkpsT8tBbea5MCeNR9mpJlq1fX'
  }


var twitterClient = new Twitter(twitterKeys);
var twitterParams = {screen_name: 'Warriors', count: "20"};

twitterClient.get('statuses/user_timeline', twitterParams, function(error, tweets, response) {
    res.json(tweets);
});

})

// Get All Usernames For Event Form ===================
router.get("/all", function(req, res) {
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