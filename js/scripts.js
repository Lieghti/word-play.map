var newArray = [];

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = $("#sentence").val();
    var inputStrings = input.split(" ");

    var input = inputStrings.map(function(inputString) {
      if (inputString.length > 3) {
        newArray.push(inputString);
      }
    });
    $(".sentence").text("Hi! The word you entered translates to: " + newArray);
    $("#story").show();
  });
});
