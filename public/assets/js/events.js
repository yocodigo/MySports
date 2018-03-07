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
      // console.log("created new event");
      // console.log(newEvent);
      location.reload();
  });

  // Get all fans
  // $.ajax({
  //   url: "/fan/all",
  //   type: "GET"
  //   }).then(function(res){
  //     var opts = '';
  //     $.each(res, function(i){
  //         opts += '<option>' + this + '</option>';
  //     });
  //     $('.option-menu').html(opts);

  //     location.reload();
  //   });
});



  $('#input_attendees').select2({
    placeholder: 'Pick Attendees',
    ajax: {
      url: '/fan/all',
      datatype: 'json',
      results: function(params){
        return {results: params}
      }
    }
    
    // ajax: {
    //   type: 'GET',
    //   url: '/fan/all',
    //   dataType: 'json'
    //   // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
      
    // }
  })

});

