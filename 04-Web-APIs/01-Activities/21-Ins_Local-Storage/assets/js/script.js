//Declaring the variable counter to be the id element counter
var counter = document.querySelector("#counter");
//Declaring the variable addButton to be the id element add
var addButton = document.querySelector("#add");
//Declaring the variable subtractButton to be the id element subtract
var subtractButton = document.querySelector("#subtract");

//Declaring the variable count and assigning it as storing the value of count in the local storage of the browser
var count = localStorage.getItem("count");

//Assigning the value of count to the textContent property of the counter element 
counter.textContent = count;

//Adding an event listener (click) to the addButton element and creating a function
addButton.addEventListener("click", function() {
//If the count is less than 24
  if (count < 24) {
//Count will increment by 1
    count++;
//Assigning the value of count to the textContent property of the counter element
    counter.textContent = count;
//Storing the value of count in the browser local storage
    localStorage.setItem("count", count);
  }
});

//Adding an event listener (click) to the subtractButton element and creating a function
subtractButton.addEventListener("click", function() {
//If the count is greater than 0
  if (count > 0) {
//The count will decrement by 1
    count--;
//The count is being assigned to the textContent property of the counter element
    counter.textContent = count;
//Storing the value of count to the browser local storage
    localStorage.setItem("count", count);
  }
});
