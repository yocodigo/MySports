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
  }).then(function(newFan) {
    console.log("A new fan was created " + newFan);
    return res.render('index');
  });

});

router.get('/colors', function(req, res) {
  // db.nbaTeam.findAll({}).then(function(teams){
  // console.log(teams)
  if (req.user) {
    helperFunctions.findUser(req.user.id, function(fan) {
      if (fan) {
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
      }
    });
  }

  // })
})

router.get('/twitter', function(req, res) {
//   if (req.user) {
//     console.log("The user id is", req.user.id);
//     helperFunctions.findUser(req.user.id, function(fan) {
//       //Splits the Team into individual words Puts the name of the team in params
//       var array = fan.team.split(" ");
//       var teamName = array[array.length - 1];
//       var twitterParams = { screen_name: teamName, count: "20" };
//       console.log(twitterParams.screen_name + "HERERERERERERERERERERERERE")
//       twitterClient.get('statuses/user_timeline', twitterParams, function(error, tweets, response) {
//         if (error) {
//           throw error;
//         }
//         res.json(tweets);
//       });
//     });
//   }
});

router.get('/teamGames', function(req, res) {
    var gameArray = [];
    if (req.user) {
    helperFunctions.findUser(req.user.id, function(fan) {
      var favteam = fan.team;
      
      function nbaSchedule1(){
        var today = new Date();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
    
        if(mm<10) {
            mm = '0'+mm
        } 
        var dd1 = today.getDate()+1;
        if(dd1<10) {
            dd1 = '0'+dd1;
        }    
        
        var queryUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2018/"+mm+"/"+dd1+"/"+"schedule.json?api_key=6pjpbc2mehgjcrdzfvnafmwn";  
        request(queryUrl, function(error, response, body) {
            
            if (!error && response.statusCode === 200) {
                for (i = 0; i < JSON.parse(body).games.length; i++) {
                    var game = JSON.parse(body).games[i];
                    var home = game.home.name;
                    var away = game.away.name;
                    if (home === favteam || away === favteam) {
                        var utcDate = JSON.parse(body).games[i].scheduled;
                        var localDate = new Date(utcDate).toString().replace(/GMT.*/g,"");
                        console.log(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);
                        // $('#schedule').append(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);
                        gameArray.push(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);    
                    }

                }
            }          
            else{
                console.log("ERROR!");
            }
        });  
        setTimeout(nbaSchedule2, 1750);
      }
      
        function nbaSchedule2(){
            var today = new Date();
            var mm = today.getMonth()+1;
            var yyyy = today.getFullYear();
        
            if(mm<10) {
                mm = '0'+mm
            } 
            var dd2 = today.getDate() + 2;
            if(dd2<10) {
                dd2 = '0'+dd2;
            }    
            var queryUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2018/"+mm+"/"+dd2+"/"+"schedule.json?api_key=6pjpbc2mehgjcrdzfvnafmwn";  
            request(queryUrl, function(error, response, body) {
                
                if (!error && response.statusCode === 200) {
                    for (i = 0; i < JSON.parse(body).games.length; i++) {
                        var game = JSON.parse(body).games[i];
                        var home = game.home.name;
                        var away = game.away.name;
                        if (home === favteam || away === favteam) {
                            var utcDate = JSON.parse(body).games[i].scheduled;
                            var localDate = new Date(utcDate).toString().replace(/GMT.*/g,"");
                            console.log(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);
                            gameArray.push(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);        
                        }
                    }
                    
                }          
                else{
                    console.log("ERROR!");
                }
            });  
            setTimeout(nbaSchedule3, 1750);   
        }
        
        function nbaSchedule3(){
            var today = new Date();
            var mm = today.getMonth()+1;
            var yyyy = today.getFullYear();
        
            if(mm<10) {
                mm = '0'+mm
            } 
            var dd3 = today.getDate() + 3;
            if(dd3<10) {
                dd3 = '0'+dd3;
            }    
            var queryUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2018/"+mm+"/"+dd3+"/"+"schedule.json?api_key=6pjpbc2mehgjcrdzfvnafmwn";  
            request(queryUrl, function(error, response, body) {
                
                if (!error && response.statusCode === 200) {
                    for (i = 0; i < JSON.parse(body).games.length; i++) {
                        var game = JSON.parse(body).games[i];
                        var home = game.home.name;
                        var away = game.away.name;
                        if (home === favteam || away === favteam) {
                            var utcDate = JSON.parse(body).games[i].scheduled;
                            var localDate = new Date(utcDate).toString().replace(/GMT.*/g,"");
                            console.log(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);
                            gameArray.push(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);        
                        }
                    }
                }          
                else{
                    console.log("ERROR!");
                }
            });  
            setTimeout(nbaSchedule4, 1750);   
        }
        
        function nbaSchedule4(){
            var today = new Date();
            var mm = today.getMonth()+1;
            var yyyy = today.getFullYear();
        
            if(mm<10) {
                mm = '0'+mm
            } 
            var dd4 = today.getDate() + 4;
            if(dd4<10) {
                dd4 = '0'+dd4;
            }    
            var queryUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2018/"+mm+"/"+dd4+"/"+"schedule.json?api_key=6pjpbc2mehgjcrdzfvnafmwn";  
            request(queryUrl, function(error, response, body) {
                
                if (!error && response.statusCode === 200) {
                    for (i = 0; i < JSON.parse(body).games.length; i++) {
                        var game = JSON.parse(body).games[i];
                        var home = game.home.name;
                        var away = game.away.name;
                        if (home === favteam || away === favteam) {
                            var utcDate = JSON.parse(body).games[i].scheduled;
                            var localDate = new Date(utcDate).toString().replace(/GMT.*/g,"");
                            console.log(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);
                            gameArray.push(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);        
                        }
                    }
                }          
                else{
                    console.log("ERROR!");
                }
            });  
            setTimeout(nbaSchedule5, 1750);   
        }
        
        function nbaSchedule5(){
            var today = new Date();
            var mm = today.getMonth()+1;
            var yyyy = today.getFullYear();
        
            if(mm<10) {
                mm = '0'+mm
            } 
            var dd5 = today.getDate() + 5;
            if(dd5<10) {
                dd5 = '0'+dd5;
            }    
            var queryUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2018/"+mm+"/"+dd5+"/"+"schedule.json?api_key=6pjpbc2mehgjcrdzfvnafmwn";  
            request(queryUrl, function(error, response, body) {
                
                if (!error && response.statusCode === 200) {
                    for (i = 0; i < JSON.parse(body).games.length; i++) {
                        var game = JSON.parse(body).games[i];
                        var home = game.home.name;
                        var away = game.away.name;
                        if (home === favteam || away === favteam) {
                            var utcDate = JSON.parse(body).games[i].scheduled;
                            var localDate = new Date(utcDate).toString().replace(/GMT.*/g,"");
                            console.log(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);
                            gameArray.push(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);
                        }
                    }
                }          
                else{
                    console.log("ERROR!");
                }
            });  
            setTimeout(nbaSchedule6, 1750);   
        }
        
        function nbaSchedule6(){
            var today = new Date();
            var mm = today.getMonth()+1;
            var yyyy = today.getFullYear();
        
            if(mm<10) {
                mm = '0'+mm
            } 
            var dd6 = today.getDate() + 6;
            if(dd6<10) {
                dd6 = '0'+dd6;
            }    
            var queryUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2018/"+mm+"/"+dd6+"/"+"schedule.json?api_key=6pjpbc2mehgjcrdzfvnafmwn";  
            request(queryUrl, function(error, response, body) {  
                if (!error && response.statusCode === 200) {
                    for (i = 0; i < JSON.parse(body).games.length; i++) {
                        var game = JSON.parse(body).games[i];
                        var home = game.home.name;
                        var away = game.away.name;
                        if (home === favteam || away === favteam) {
                            var utcDate = JSON.parse(body).games[i].scheduled;
                            var localDate = new Date(utcDate).toString().replace(/GMT.*/g,"");
                            console.log(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);
                            gameArray.push(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);        
                        }
                    }
                }          
                else{
                    console.log("ERROR!");
                }
            });  
            setTimeout(nbaSchedule7, 1750);   
        }
        
        function nbaSchedule7(){
            var today = new Date();
            var mm = today.getMonth()+1;
            var yyyy = today.getFullYear();
        
            if(mm<10) {
                mm = '0'+mm
            } 
            var dd7 = today.getDate() + 7;
            if(dd7<10) {
                dd7 = '0'+dd7;
            }    
            var queryUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2018/"+mm+"/"+dd7+"/"+"schedule.json?api_key=6pjpbc2mehgjcrdzfvnafmwn";  
            request(queryUrl, function(error, response, body) {   
                if (!error && response.statusCode === 200) {
                    for (i = 0; i < JSON.parse(body).games.length; i++) {
                        var game = JSON.parse(body).games[i];
                        var home = game.home.name;
                        var away = game.away.name;
                        if (home === favteam || away === favteam) {
                            var utcDate = JSON.parse(body).games[i].scheduled;
                            var localDate = new Date(utcDate).toString().replace(/GMT.*/g,"");
                            console.log(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);
                            gameArray.push(JSON.parse(body).games[i].away.alias + " at " + JSON.parse(body).games[i].home.alias + " | " + localDate);                        
                        }
                    }
                    console.log(gameArray);
                    res.json(gameArray);
                }          
                else{
                    console.log("ERROR!");
                }
            });  
        }
    nbaSchedule1();         
    });
  } 
});

router.get('/todaysGames', function(req, res) {
  var today = helperFunctions.getDate();
  var queryUrl = "https://api.sportradar.us/nba/trial/v4/en/games/2018/" + today.month + "/" + today.day + "/schedule.json?api_key=6pjpbc2mehgjcrdzfvnafmwn";
  request(queryUrl, function(error, response, body) {
    // If the request is successful
    if (!error && response.statusCode === 200) {
      //console.log(response);
      var respObj = JSON.parse(body);
      res.json(respObj.games);
    } else {
      console.log(error);
    }
  });
});

// Get All Usernames For Event Form ===================
router.get("/all", function(req, res) {
  db.Fan.findAll({}).then(function(fans) {
    // console.log(fans + "HERERERERERE")
    // res.json(fans)
    var fanHolder = [];
    // var opts = '';
    for (i = 0; i < fans.length; i++) {
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