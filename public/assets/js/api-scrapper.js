$.ajax({
  url: '/fan/twitter',
  method: 'GET'
}).done(function(response){
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    
    $('#twitterMessages').append('<p>' + response[i].text + '</p>');
  }
});

$.ajax({
  url: '/fan/todaysGames',
  method: 'GET'
}).done(function(response){
  console.log(response);
  response.forEach(function(game){
  	var newDiv = $("<div>");
  	newDiv.append("<p>"+ game.home.alias + " AT " + game.away.alias +"</p>");
  	$("#daily-scedule").append(newDiv);
  })
});
