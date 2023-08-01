//for loops

const array = ["James", "Kim", "Elaine"];

for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}


array.forEach((e) => console.log(e));


array.map((e) => {
    console.log(e)
    return e;
});


const multiDimensionalArray = [
    [1, 2, 3],
    ["James", "Kim", "Elaine"]
]

for (let i = 0; i < multiDimensionalArray.length; i++){    //short hand example below
    console.log(multiDimensionalArray[i]);
//Will print to the console [1, 2, 3]

    const childArray = multiDimensionalArray[i];
    for (let j = 0; j < childArray.length; j++){
        console.log(childArray[j])
    }
}

//for of loop
for(const name of array){
    console.log(name);
}

//more simple way of writing the previous multiDimensionalArray for loop above ^^
//give access to the element
for(const child of multiDimensionalArray){
    for (const grandChild of child){

    }
}

//gives access to the element
for(const index in multiDimensionalArray){
    console.log(multiDimensionalArray[index]);
}