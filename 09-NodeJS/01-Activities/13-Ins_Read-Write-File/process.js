// console.log(process.env);

//console.log(process.argv);  //-- arguments array

// console.log(process.argv[2]);

// modules


//core modules - what comes as part of node
//external modules - local modules - you create or copy over from somewhere else
//third part modules - someone else has created and you import the library

// 'fs' - FileSystem

const fs = require("fs");  //import a module into your node program - always use the require keyword

// import fs from 'fs';   //not supported with all modules and supported by ES method

// console.log(fs);

//will overwrite the file every time instead of adding to it + if the file doesn't exist, it creates it as well
fs.writeFile("./data.log", "Hello write this data in the file", (error) => {
    if(error) {
        console.log(error);
        return;
    }
    // console.log(data);
})

//this function will get two callbacks for error and data from the readFile
//you can add a file path where the data.log is
fs.readFile("data.log", "utf8", (error, data) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(data);
})
//callback is a function that is saying I am calling you, call me back

