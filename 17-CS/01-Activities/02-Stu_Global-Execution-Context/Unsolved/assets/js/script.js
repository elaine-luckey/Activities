// 1) Where is carNoise stored?
//it is stored in teh global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// goFast is stored in the global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Once the goFast execution context is created, 80 is assigned as the speed
  
  // 5) Where is makeNoise stored?
  //makeNoise is stored in the function execution context of goFast
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // The makeNoise function is executed in teh function executable context
  makeNoise(carNoise);
  //one more stack is created7
}

// 3) What happens in the following statement?
// If the user decides to confirm the message the goFast function will be executed in teh function executable context
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
