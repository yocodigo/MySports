$(document).ready(function(){
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
      location.reload();
  });
});

// Get all fans for mulit select
  $('#input_attendees').select2({
    placeholder: 'Pick Attendees',
    ajax: {
      url: '/fan/all',
      datatype: 'json',
      results: function(params){
        return {results: params}
      }
    }
  })

});

