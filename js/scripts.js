//Beginning of Business Logic
var seasonalCoffeeRange = function(input) {
  var newArray = [];
  var superArray = [];
  for (var range = 0; range <= input; range++) {
    newArray.push(range);
    if (range == input) {
      newArray.forEach(function(item, index, array) {
        if ((item % 12 === 0) && (item > 0)) {
          item = "latte";
        };
        if ((item % 3 === 0) && (item > 0)) {
          item = "pumpkin";
        };
        if ((item % 4 === 0) && (item > 0)) {
          item = "spice";
        };
        superArray.push(item);
      }); return superArray;
    }
  }
};
//End of Business Logic

//Beginning of Front End Logic
$(document).ready(function() {
  $("form#numbersubmit").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numberinput").val());
    if (isNaN(userInput)) {
      alert("please enter valid number");
    } else {
      var finalAnswer = seasonalCoffeeRange(userInput);
      $("#result").empty();
      $(".card").show();
      $("#result").append(finalAnswer);
    }; //end of else statement
  }); //end of .submit function
}); //end of docready.function
