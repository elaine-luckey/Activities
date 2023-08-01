// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
//The spread operator is being used to copy the 'songs' array into another array
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
//['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got']
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  //reduce() method is used to reduce an array into a single value based on some logic provided as an argument.
  //
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
//6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
//it is the spread operator that is removing the boundries of the array
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
// 6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// 110
console.log(additionSpread(1, 2, 3, 4, 100));
