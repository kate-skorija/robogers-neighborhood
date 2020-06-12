// UI Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let userInput = parseInt($("#userInput").val());
    let inputArray = responseArray(userInput);
    let changedArray = replaceDigits(responseArray(userInput));
    console.log(inputArray);
    console.log(changedArray);
  });
});

// Business Logic

function responseArray (userInput) {
  let inputArray = [userInput];
  for (index = userInput; index > 0; index--) {
    inputArray.push(index - 1);
  }
  inputArray.reverse();
  return inputArray
}

function replaceDigits (inputArray) {
  for (index = 0; index < inputArray.length; index++) {
    if (inputArray[index] === 1) {
      inputArray.splice(index, 1, "Beep!");
    } else if (inputArray[index] === 2) {
      inputArray.splice(index, 1, "Boop!");
    }
  }
  return inputArray
}


// Program will return a range of numbers from 0 to the users inputted number DONE!
// Program will replace all 1's with "Beep!" DONE!
// Program will replace all 2's with "Boop!"
// Program will replace all 3's with "Won't you be my neighbor?"
// Program will apply the rule for 3's over the rule for 1's or 2's
// Program will apply the rule for 2's over the rule for 1's
// Program will reset so user can enter a new number and see new results
// Program will only let a user input a number, 0 or greater

