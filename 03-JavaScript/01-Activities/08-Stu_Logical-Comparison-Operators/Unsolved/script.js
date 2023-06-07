var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e); //logs true
var expression2 = (e < d); // logs false

// Use comparison operators so all expressions below log to the console as true
console.log(a === b); // logs false
console.log(b !== e); // logs false
console.log(c < b); // logs true
console.log(d > 0); // logs true

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2); 
console.log( !expression1 || expression2);

