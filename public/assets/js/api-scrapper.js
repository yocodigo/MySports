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

$.ajax('/fan/colors', {
  method: 'GET'
}).done(function(team) {
  $('.teamBanner').css('background-color', team.color1);
  $('.teamBanner').css('border-bottom', '20px solid ' + team.color2);
});


$.ajax({
  url: '/fan/teamGames',
  method: 'GET'
}).done(function(response) {
  console.log (response);
  response.forEach(function(game) {
    var newDiv = $("<div>");
    newDiv.append("<p>" + game + "</p>");
    $("#NBAGames").append(newDiv);
  })
});
