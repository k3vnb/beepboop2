//Business End
var seasonalCoffeeRange = function(input) {
  var reply = [];
  var newArray = [];
  var superArray = [];
  for (var range = 0; range <= input; range++) {
    newArray.push(range);
    if (range == input) {
      newArray.forEach(function(item, index, array){

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

//end of Business Logic


//Front End
$(document).ready(function() {
  $("form#numbersubmit").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numnum").val());
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

// Notes
//
// Kevin as we discussed you have a lot of great looking code, but I'd like the opportunity to look at your process from the beginning... specifically using specs as your guide.
//
// To that end I'd like you to:
//
// Copy your repo for me and erase your business logic from your js/scripts.js document.
//
// Create a new readme that includes your name and your specs. Doesn't have to include any other info.
//
// Start over with your business logic using this prompt:
//
// Write a program that takes a user inputted number and returns a list of numbers from 0 to the inputted number with the following exceptions:
// 1. Any number divisible by 3 should be replaced with "pumpkin".
// 2. Any number divisible by 4 should be replaced with "spice".
// 3. Any number divisible by 12 should be replaced with "latte".
// Please include three commits: 1. Commit with empty business logic and specs written for the prompt above. 2. Commit after writing the code to pass the first spec. 3. Commit after writing code to pass the second spec.
//
// Please make sure to be incremental and make sure to use only the resources available to you given our academic honesty policy. Thanks for you hard work here! Looking forward to seeing your resub!
