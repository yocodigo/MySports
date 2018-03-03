// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    console.log("Devour was pressed");
    var id = $(this).data("id");

    var eaten = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function(res) {
        console.log("Burger was eaten");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#make-it").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Inside make it function");
    console.log($("#burgerInput").val().trim());

    var newBurger = {
      burger_name: $("#burgerInput").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});