var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b); // 110
console.log(a - b); // 90
console.log(a / b); // 10
console.log(a * b); // 1000

// Modulus returns the remainder between two numbers.  
console.log(a % b); // 0

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality

console.log(b == c); // false
console.log(b != c); // true

// Compares equality and type (strict equality)
console.log(b === c); // false
console.log(b !== c); //true

// Greater than or less than
console.log(a > b); // logs true
console.log(a < b); // logs false

// Greater than or equal to and less than or equal to
console.log(a <= b); //logs false
console.log(a >= b); // logs true

// Logical operators take in two or more expressions and return true or false 
var expression1 = (b == c); //logs true
var expression2 = (a > b); //logs true

// Evaluates to true if expression1 AND expression2 are both true, otherwise false

console.log(expression1 && expression2); //logs true

// Evaluates to true if expression1 OR expression2 is true, otherwise false

console.log(expression1 || expression2); //logs true

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(expression2); 

// Returns false
console.log(!expression2);
