// let fn = (a, b) => console.log(a, b);

// fn = (a, b, c, d) => console.log(a, b, c, d)

// fn(1, 2, 3, 4, 5, 6, 7)

//Could end up writing 26 or more parameters in a function so in ES6 they created rest

//rest 0 concept which deals with any overloaded params in JavaScript

let fn2 = (...rest) => console.log(rest);
//^^ This prints an array
//Rest is used to convert the rest of your params into an array

fn2(1, 2);



 const array = [1, 2];
 const leftOutArrayValues = [1];

//  array.push(1); // [2, 3, 1]   //.push adds to the end of the array
//  array.unshift(1);  //[1, 2, 3]  //.unshift adds to the front of the array


 //spread concept - removes the boundries of an array
 console.log(array);

 //when adding the ... you are removing the boundries of the array

 console.log(array);

 console.log(...array);


 const newArray = [...leftOutArrayValues, 1.5,...array, 4];
            //Will print [1, 1.5, 2, 3, 4]
            //If you remove the [] it will not be an array, if you add the brackets back you will add the boundries back into an array


//spread also works with an object

const user = {
    name: "Rohit",
}

user.age = 20;

const newObj = {
    ...user,
    age: 20
}


//you can use a spread of rest anywhere there is an array or an object

