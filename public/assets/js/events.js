// Get info from the form
$("#create-event").on("click", function(event) {
    event.preventDefault();

    var eventTitle = $("#input_eventName").val().trim();
    var eventLocation = $("#input_eventLocation").val().trim();
    var eventDescription = $("#input_description").val().trim();
    var eventDate = $("#input_date").val().trim();
    var eventTime = $("#input_time").val().trim();
    var eventDateTime = eventDate + ' ' + eventTime; 
    var eventAttendees = $("#input_attendees").val().trim();

var newEvent = {
    title: eventTitle,
    location: eventLocation,
    description: eventDescription,
    date: eventDateTime,
    attendess: eventAttendees
}


 // Send the POST request.
 $.ajax("/events", {
    type: "POST",
    data: newEvent
  }).then(function(data) {
      console.log("created new event");
      console.log(newEvent);
  });

  $.ajax({
    url: "/fan/all",
    type: "GET"
    }).then(function(res){
      console.log(res)
      var opts = '';
      $.each(res, function(i){
          opts += '<option>' + this + '</option>';
      });
      $('.option-menu').html(opts);
    });
});



// Get all fans from DB


