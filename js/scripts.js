// UI Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let userInput = $("#userInput").val();
    let inputArray = responseArray(userInput);
   
    console.log(inputArray)
    console.log(putTogether(inputArray));

  });
});

// Business Logic

function responseArray (userInput) {                    // returns an array of numbers up to user input
  let inputArray = [userInput];
  for (index = userInput; index > 0; index--) {
    inputArray.push(index - 1)
  }
  inputArray.reverse();
  let stringArray = inputArray.map(String)
  return stringArray
}

function splitDigits (inputArray) {                      // splits each number in array of numbers into digits
  let splitArray = [];
  for (const element of inputArray) {
    let splitArray = element.split("");
    }
  let newSplitArray = [];
  for (const element of splitArray) {
    if (element === "3") {
      newSplitArray = [];
      newSplitArray.push("Won't you be my neighbor?")
    } else if (element === "2") { 
      newSplitArray = [];
      newSplitArray.push("Boop!")
    } else if (element === "1") {
      newSplitArray = [];
      newSplitArray.push("Beep!")
    }
  }
  return newSplitArray
}

function putTogether (inputArray) {
  inputArray.forEach(function(number) {
    
  })
  return inputArray
}





// function splitDigits (inputArray) {                      // splits each number in array of numbers into digits
//   let splitArray = [];
//   for (const element of inputArray) {
//     let splitArray = element.split("");
//     }
//     return splitArray
//   }

// function replaceDigits (splitArray) {                  // replaces 1's, 2's, & 3's with 
//   let newSplitArray = [];
//   for (const element of splitArray) {
//     if (element === "3") {
//       newSplitArray = [];
//       newSplitArray.push("Won't you be my neighbor?")
//     } else if (element === "2") { 
//       newSplitArray = [];
//       newSplitArray.push("Boop!")
//     } else if (element === "1") {
//       newSplitArray = [];
//       newSplitArray.push("Beep!")
//     }
//   }
//   return newSplitArray



















// function topString (newSplitArray) {
//   let topString = [];
//   for (const element of newSplitArray) {
//     if (element = )
//   }
// }


// function replaceDigits (splitArray) {
//   let newSplitArray = [];
//   for (let i = splitArray.length - 1; i >=0; i--) {
//     if (i === "3") {
//       splitArray = [];
//       splitArray.push("Won't you be my neighbor?")
//     } else if (i === "2") { 
//       splitArray = [];
//       splitArray.push("Boop!")
//     } else if (i === "1") { 
//       splitArray = [];
//       splitArray.push("Beep!")
//     }
//   }
//   console.log(splitArray);
//   return splitArray
// }

// function replaceDigits (inputArray) {
//   for (index = 0; index < inputArray.length; index++) {
//     if (inputArray[index] === "1") {
//       inputArray.splice(index, 1, "Beep!");
//     } else if (inputArray[index] === "2") {
//       inputArray.splice(index, 1, "Boop!");
//     } else if (inputArray[index] === "3") {
//       inputArray.splice(index, 1, "Won't you be my neighbor?")
//     }
//   }
//   return inputArray
// }



// function replaceDigits (inputArray) {
//   for (const element of inputArray) {
//     element.split("")
//     if (element[index] === 1)
//     inputArray.splice(element, 1, "Beep!")
//   }
//   return inputArray
// }


// Program will return a range of numbers from 0 to the users inputted number DONE!
// Program will replace all 1's with "Beep!" DONE!
// Program will replace all 2's with "Boop!" DONE!
// Program will replace all 3's with "Won't you be my neighbor?" DONE!
// Program will apply the rule for 3's over the rule for 1's or 2's
// Program will apply the rule for 2's over the rule for 1's
// Program will reset so user can enter a new number and see new results
// Program will only let a user input a number, 0 or greater 
//