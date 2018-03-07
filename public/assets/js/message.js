$("#submit-message").on("click", function(event) {
    event.preventDefault();

    var messageText = $("#input_message").val().trim();
    
    var newMessage = {
        message: messageText,
        user: 'user'
    }
     // Send the POST request.
    $.ajax({
       url: "/messages",
       type: "POST",
       data: newMessage
     }).then(function(newMessage) {
        location.reload();
     });

     $("#input_message").html('');
});