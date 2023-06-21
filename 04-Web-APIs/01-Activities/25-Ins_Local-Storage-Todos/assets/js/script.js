//Declare the variable student to be the id element student-name
var student = document.getElementById("student-names");
//Declare the variable grade to be the id element grades
var grade = document.getElementById("grades");
//Declare the variable comment to be the id element msg
var comment = document.getElementById("msg");
//Declare the variable saveButton to be the id element save
var saveButton = document.getElementById("save");
//Declare the variable savedName to be the id element saved-name
var savedName = document.getElementById("saved-name");

//Creating a function called saveLastGrade
function saveLastGrade() {
// Save related form data as an object
  var studentGrade = {
    student: student.value,
    grade: grade.value,
//tim() is used to trim out all the extra whitespace
    comment: comment.value.trim()
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
}

function renderLastGrade() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  // Check if data is returned, if not exit out of the function
  if (lastGrade !== null) {
  document.getElementById("saved-name").innerHTML = lastGrade.student;
  document.getElementById("saved-grade").innerHTML = lastGrade.grade;
  document.getElementById("saved-comment").innerHTML = lastGrade.comment;
  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
event.preventDefault();
saveLastGrade();
renderLastGrade();
});

// The init() function fires when the page is loaded 
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastGrade();
}
init();
