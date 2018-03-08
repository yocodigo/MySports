var router = require('express').Router(); 
var db = require("../models");
var Twitter = require("twitter");
var twitterKeys = require("../config/keys.js").twitterKeys;
var twitterClient = new Twitter(twitterKeys); 
var request = require('request');
var helperFunctions = require("../public/assets/js/helperFunctions.js");
var team;

router.post("/new", function(req, res) {
  var newFan = req.body;
  team = newFan.team;
  db.Fan.create({
    name: newFan.name,
    email: newFan.email,
    city: newFan.city,
    team: newFan.team,
    googleID: newFan.googleID
  }).then(function(newFan){
    console.log("A new fan was created " + newFan);
    return res.render('/auth/login');
  });
  
}); 

router.get('/colors', function(req,res){
  // db.nbaTeam.findAll({}).then(function(teams){
    // console.log(teams)

    helperFunctions.findUser(req.user.id, function(fan){
      db.nbaTeam.findOne({
        where: {
          name: fan.team
        }
      }).then(function(team) {
        console.log(team);
      var teamObj = {
        color1: team.color1,
        color2: team.color2,
        logo: team.logo
      }
      res.json(teamObj);
      });
    });
    
    
  // })
})

router.get('/twitter', function(req, res){
  console.log("The user id is", req.user.id);
  helperFunctions.findUser(req.user.id, function(fan){
    //Splits the Team into individual words Puts the name of the team in params
    var array = fan.team.split(" ");
    var teamName = array[array.length-1]; 
    var twitterParams = {screen_name: teamName, count: "20"};
    twitterClient.get('statuses/user_timeline', twitterParams, function(error, tweets, response) {
      if(error){
        throw error; 
      }
        res.json(tweets);
    });
  }); 
});

router.get('/teamGames', function(req, res){

});

router.get('/todaysGames', function(req, res){
  var today = helperFunctions.getDate();
  var queryUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2018/" + today.month + "/" + today.day + "/schedule.json?api_key=6pjpbc2mehgjcrdzfvnafmwn";
  request(queryUrl, function(error, response, body) {
      // If the request is successful
      if (!error && response.statusCode === 200) {
         //console.log(response);
         var respObj =  JSON.parse(body);
         res.json(respObj.games);
      }
      else{
        console.log(error);
      }
  });
});

// Get All Usernames For Event Form ===================
router.get("/all", function(req, res) {
  db.Fan.findAll({}).then(function(fans){   
    // console.log(fans + "HERERERERERE")
    // res.json(fans)
    var fanHolder = [];
    // var opts = '';
    for(i=0; i<fans.length; i++){
      fanHolder.push(fans[i].dataValues.name)
      // console.log(res[i])
    }
    // console.log(fanHolder)
    
    res.json(fanHolder)
    //   fanName = (res[i].dataValues.name);
    //   console.log(fanName);
      // opts += '<option>' + this + '</option>';
      // $('.option-menu').html(opts);
    }); 
  });


module.exports = router; 