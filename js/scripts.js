// UI Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    userInput = $("input#userInput").val();
    let robogerArray = robogerResponse(userInput);

    $(".response").text(robogerArray);
    $("#results").show();
    $("#reset").click(function(){
      $("#results").hide();
    })
  });
});

// Business Logic

function robogerResponse (userInput) {
  let responseArray = [];

  for (let i = 0; i <= userInput; i++) {
    if (i.toString().includes("3")) {
      responseArray.push(" Will you be my neighbor?");
    } else if (i.toString().includes("2")) { 
      responseArray.push(" Boop!");
    } else if (i.toString().includes("1")) { 
      responseArray.push(" Beep!"); 
    } else {
      responseArray.push(" " + i); 
    }
  }
  return responseArray
  }
