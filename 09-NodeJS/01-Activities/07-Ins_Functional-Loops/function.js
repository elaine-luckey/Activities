const ar1 = [
    1,
    2,
    3
]

// const newSquaredArray = [];

// //loop over and print the names

// for (let i =0; i < ar1.length; i++){
//     newSquaredArray.push(ar1[i] * ar1[i])
// }

// ar1.forEach(function(e) {
//     console.log(e * e);
// })

//map

const newAr1 = ar1.map(function(e) {
    if (e > 2)
    console.log(e);
})

console.log("newAr1", newAr1);

const newAr2 = ar1.map((e) => e * e)
console.log("newAr2", newAr2)

//filter

const filteredArray = ar1.filter(e => {
    return (e > 2)
})

//short hand of the previous written function
const filteredArray2 = ar1.filter(e => e > 2)

console.log(filteredArray, filteredArray2) 