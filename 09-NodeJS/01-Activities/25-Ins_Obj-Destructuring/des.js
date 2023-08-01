//destructure


const fn = (userObject) => {

//another way of writing the above ^^ is...

const fn = ({name, age, other}) => {



    // const name = userObject.name;
    // const age = userObject.age;
    // const other = userObject.other;

    const name = "Some Name mentioned in previous Code";

    //new way of assigning all the values from userObject in one line instead of individually like above
    var {name: newNameVariable, age, other} = userObject;

    // Instead of doing ^^ that you can do...
    const localObject = {
        someKey: "Some value"
    }
    var {someKey} = localObject;
}

    //you can also use just "name", "age", and "other" since it is declared as part of the userObject in the beginning
    console.log(`My name is ${newNameVariable} and my age is ${age}, and my other property is ${other}`);

     console.log(name);
}

const obj = {
    name: "Rohit",
    age: 20,
    other: "value"
}

fn(obj);






