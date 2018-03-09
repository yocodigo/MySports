// function getTwitter()

$.ajax({
    url: '/fan/twitter',
    method: 'GET'
  }).done(function(response) {
    // console.log(response);
    for (var i = 0; i < response.length; i++) {
      $('#twitterMessages').append('<p>' + response[i].text + '</p>');
    }
  })
  // }
function getTodaysGames() {
  $.ajax({
    url: '/fan/todaysGames',
    method: 'GET'
  }).done(function(response) {
    console.log(response);
    response.forEach(function(game) {
      var newDiv = $("<div>");
      newDiv.append("<p>" + game.home.alias + " AT " + game.away.alias + "</p>");
      $("#daily-scedule").append(newDiv);
    })
  });
}

$(function() {
  $.ajax('/fan/colors', {
    method: 'GET'
  }).done(function(team) {
    $('.teamBanner').css('background-color', team.color1);
    $('.teamBanner').css('border-bottom', '20px solid ' + team.color2);
  });
});

$.ajax({
  url: '/fan/teamGames',
  method: 'GET'
}).done(function(response) {
  console.log (response);
  response.forEach(function(game) {
    var newDiv = $("<div>");
    //var newImg = $("<img>"); 
    newDiv.append("<p><span><img src='http://www.opnlttr.com/sites/default/files/448650-basketball_mario_sports_mix_.png' style='width:20px; margin-right:10px'>" + game + "</span></p>");
    $("#NBAGames").append(newDiv);
  })
});
