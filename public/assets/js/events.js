// Google Calendar API 



// Get info from the form
$("#create-event").on("click", function(event) {
    event.preventDefault();

    var eventTitle = $("#input_eventName").val().trim();
    var eventLocation = $("#input_eventLocation").val().trim();
    var eventDescription = $("#input_description").val().trim();
    var eventDate = $("#input_date").val().trim();
    var eventAttendees = $("#input_attendees").val().trim();

var newEvent = {
    title: eventTitle,
    location: eventLocation,
    description: eventDescription,
    date: eventDate,
    attendess: eventAttendees
}


 // Send the POST request.
 $.ajax("/events", {
    type: "POST",
    data: newEvent
  }).then(function(data) {
      console.log("created new event");
      console.log(newEvent);

    // $('#eventContent').append(newEvent.title);
    // $('#eventContent').append(newEvent.location);
    // $('#eventContent').append(newEvent.description);
    // $('#eventContent').append(newEvent.date);
    // $('#eventContent').append(newEvent.attendess);

  });
});