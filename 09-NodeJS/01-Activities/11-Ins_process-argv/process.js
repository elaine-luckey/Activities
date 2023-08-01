console.log(process);


//Involves some information about the environment, like a node version, browser version, etc
console.log(process.env);

//Arguments array - it represents whatever arguments we pass to the node program
//node process.js "Hello" - will show the default arguments that are the file paths and then it will show the "Hello" argument
console.log(process.argv);


//This will only bring the "Hello" to the console after printing the arguments
console.log(process.argv[2]);



