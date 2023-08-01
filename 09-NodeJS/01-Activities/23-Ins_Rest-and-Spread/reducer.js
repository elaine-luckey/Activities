

[1, 2, 3].reduce((valueTillNow, currentElement) => a + b, 0);


const Users = [
    {
        value: 10,
    },
    {
        value: 20,
    },
    {
        value: 5,
    }
]

//sum of value of the whole array

Users.reduce((valueTillNow, current) => {

    return (valueTillNow + current.value);
})