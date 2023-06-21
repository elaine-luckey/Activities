//Declaring the variable submitEl to be the element id for the submit button
var submitEl = document.querySelector("#submit");
//Declaring the variable nameInput to be the element id for the name text field
var nameInput = document.querySelector("#name");
//Declaring the variable emailInput to be the element id for the email text field
var emailInput = document.querySelector("#email");
//Declaring the variable submissionResponseEl to be the element id for the element id for the response that is generated after fill the 2 text fields and clicking the submit button
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
submitEl.addEventListener("click", showResponse);
