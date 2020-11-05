
$(document).ready(function() {
 
    $("#create-guest").on("click", function(event) {

        event.preventDefault();

        // Creates new guest
        var newGuest = {
            name: $("#guest-name").val().trim(),
            rooms: $("#guest-room-count").val().trim(),
            phone: $("#guest-phone").val().trim()
        }
        // Send the POST request
        $.ajax("/api/guests",  {
            type: "POST",
            data: newGuest
        }).then(
            function(data) {
                console.log(data);
                //reload page to get updated list
                location.reload();
                
            }
        );
    });
    
        $(".change-status").on("click", function(event) {
          var id = $(this).data("id");
          var newStatus = $(this).data("newStatus");
      
          var newStatusState = {
            status: newStatus
          };
      
          // Send the PUT request.
          $.ajax("/api/guests/" + id, {
            type: "PUT",
            data: newStatusState
          }).then(
            function() {
              console.log("changed status to", newStatus);
              // Reload the page to get the updated list
              location.reload();
            }
          );
        
        });

});



