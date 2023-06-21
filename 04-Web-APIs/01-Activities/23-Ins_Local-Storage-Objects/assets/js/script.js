//Declaring the variable student to be the id element student-names
var student = document.getElementById("student-names");
//Declaring the variable grade to be the id element grades
var grade = document.getElementById("grades");
//Declaring the variable comment to be the id element msg
var comment = document.getElementById("msg");
//Declaring the variable saveButton to the the id element save
var saveButton = document.getElementById("save");
//Declaring the variable savedName to be the id element saved-name
var savedName = document.getElementById("saved-name");

//Adding and event listener (click) to the saveButton and creating a function with the parameter of event
saveButton.addEventListener("click", function(event) {
//Preventing the default event that would normally happen in the browser when the button is clicked
event.preventDefault();

//Declaring the studentGrade as an object
var studentGrade = {
//student is assigned to student.value
  student: student.value,
//grade is assigned to grade.value
  grade: grade.value,
//comment is assigned to the comment value and trimming the excess whitespace
  comment: comment.value.trim()
};

//Storing the studentGrade object to the local storage, but converting it to a string so the browser is able to store the data
localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//Calling the renderMessage function below
//Output should be the student's + "received a/an" + the student's grade
renderMessage();

});

//Creating a function called renderMessage
function renderMessage() {
//Declaring the variable lastGrade to be converted back into an object from the local storage that was holding the variable studentGrade so that you can grab the student's name and grade from the object
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
 //If the lastGrade is not equal to null
  if (lastGrade !== null) {
//Grabbing the class element message and getting the textContent property to take the name of the student and teh grade of the student and concat (bring together)
    document.querySelector(".message").textContent = lastGrade.student + 
//Adding a string plus the grade that the student selected from the last line received
    " received a/an " + lastGrade.grade
  }
}
