// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#sign-up-button").on("click", function(event) {
    event.preventDefault();

    var fanName = $("#fan-name").val().trim();
    var fanEmail = $("#fan-email").val().trim();
    var fanCity = $("#fan-city").val().trim(); 
    var fanTeam = $("#fan-team").val().trim();
    var fanGoogleID = $("#googleID").data('googleid');

    console.log(fanGoogleID);

    var newFan = {
        name: fanName,
        email: fanEmail,
        city: fanCity,
        team: fanTeam,
        googleID: fanGoogleID
    }

     //Send the POST request.
    $.ajax("/fan/new", {
      type: "POST",
      data: newFan
    }).then(function(data) {
        // console.log("created new Fan");
        // After Creating the new User take them back to the login screen
        window.location.href = "/";
    });

});

    
        
        $.ajax('/fan/colors',{
            method: 'GET'
        
        }).done(function(team){
       
            $('.teamBanner').css('background-color', team.color1);
            $('.teamBanner').css('border-bottom', '20px solid ' + team.color2);
            var logoImg = $('<img>').attr('src', team.logo);
            $('.teamBanner').append(logoImg)
              });
    
});