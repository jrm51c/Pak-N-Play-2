//NOT CURRENTLY CONNECTEDAND IN USE


// Use PUT method to update information with both "rent" and "donate" for items.
$(document).ready(function () {
  /* $("#submit").on("click", function (event) {
    //if this doesn't work, try "if rent is checked" statement
    if ($("#rent") === "renter") {
      var id = $(this).data("id");
      var rentItem = $(this).data("rentItem");
      //create variable in form to select quantity
      var rentItem = {
        quantity: quantity
      };
      // Send the PUT request.
      $.ajax("/api/paknplay/" + id, {
        type: "PUT",
        data: rentItem
      }).then(
        function () {
          console.log(quantity + "of " + id + " successfully rented");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
  }); */
  //Adding new item for a donator
  $("#submit").on("submit", function (event) {
    //If rent=renter doesn't work, try making an "if renter is checked" statement
    //Is there a way to check stock item in case someone is donating an item that already exists? This will determine if item needs a PUT or POST method
    /* if ($("#donate") === "donator") { */
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newitem = {
        first_name: $("#itemFirstName").val(),
        last_name: $("#itemLastName").val(),
        item_category: $("#dItemCategory").val(),
        item_name: $("#dItemName").val(),
        item_description: $("#dItemDes").val(),
        item_description: $("#dItemDes").val(),
        photo_link: $('#dItemPhoto').val(),
        quantity: $('#dItemQuantity').val(),
        lend: $('#lend').val(),
        donate: $('#donate').val()
      };

      // Send the POST request.
      $.ajax("/api/paknplay", {
        //Send this to the controller, send controller to model, send model to SQL database
        type: "POST",
        data: newitem
      }).then(
        function () {
          console.log("added new item");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })
 
  //Commenting delete method out on lines 53-66 for the time being, Not sure if we will need to use this at all. Even if stock item is down to zero, we simply would not show it to the user on the front end. No need to delete in case someone donates an item, thus replenishing the stock.
  // $(".delete-cat").on("click", function (event) {
  //   var id = $(this).data("id");
  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function () {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});



