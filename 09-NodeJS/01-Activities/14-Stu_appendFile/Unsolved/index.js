// TODO: What are we importing?
//fs is used to help store, access, and manage data on our OS
//:YOu can use the module to read and write files
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// Creating a file called log.txt and process the second argument given 
//appendFile adds to the data that is already in the file (does not overwrite like writeFile)
//this is also a call back function starting with the (err) =>
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  //if there is an error log error on the console, else log 'Commit logged'
  err ? console.error(err) : console.log('Commit logged!')
);
