// TODO: Import `maths.js`
const mathJS = require("./maths.js");

console.log(mathJS)
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`


let numOne = 5;
let numTwo = 10;
let operation = "0";
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch (operation) {
    case "+":
        console.log(mathJS.sum(numOne, numTwo))
        break;
    
    case "-":
        console.log(mathJS.difference(numOne, numTwo))
        break;

    case "*":
        console.log(mathJS.product(numOne, numTwo))
        break;
    
    case "/":
        console.log(mathJS.quotient(numOne, numTwo))
        break;
    default: console.log("error")
}
