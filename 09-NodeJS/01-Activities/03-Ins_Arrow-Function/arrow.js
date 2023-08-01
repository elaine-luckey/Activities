

//Old way to write functions

var fn = function (param1) {
    console.log("From Normal function")
    return param1 + 1;
}


//New way to write an arrow function
//This is turning a function into an arrow function

// var fn2 = (param1 => {
//     console.log('From Arrow Function')
//     return param1 +1;
// })

//Another way to write the arrow function
const fn2 = (param1, param2) => param1 + 1;

const fn3 = (param1, param2) => console.logI(param1, param2)

//If you have no parameter you write it like this...
const fn4 = () => console.log(param1, param2);

console.log(fn(2));

fn2(3, 3);


//Before ES6 you would always use var to declare variable and functions, but with ES6 you have to use let and const

//when declaring with 'var' the variable can be accessed outside of the function and can cause issues later down the line because it has a global scope

//when declaring with 'let' the variable can only be accessed in the function because they are BLOCK scoped. The scope of the variable is only within the block that it is declared

let variable = 7;

for (let variable = 0; variable < 5; variable++){
    let variable2 = 6;
}

console.log(variable);  //This will print 7 because the variable is declared outside of the for loop and it will not print what is in the for loop

//BLOCK scoped

const newVariable = 6;

newVariable = 7;   //Will throw an error because a 'const' variable cannot be redefined or re-declared in the file.

//Use 'const' on all functions and only use 'let' when you see that the variable should be changed later in the code.


