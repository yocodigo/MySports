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

     // Send the POST request.
    $.ajax("/api/new", {
      type: "POST",
      data: newFan
    }).then(function(data) {
        console.log("created new Fan");
        // Reload the page to get the updated list
        window.location.href = "/auth/login";
        //location.reload();
    });
  });
});

  // $("#make-it").on("click", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();
  //   console.log("Inside make it function");
  //   console.log($("#burgerInput").val().trim());

  //   var newBurger = {
  //     burger_name: $("#burgerInput").val().trim(),
  //     devoured: 0
  //   };

  //   // Send the POST request.
  //   $.ajax("/api/burgers", {
  //     type: "POST",
  //     data: newBurger
  //   }).then(
  //     function() {
  //       console.log("created new Burger");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });