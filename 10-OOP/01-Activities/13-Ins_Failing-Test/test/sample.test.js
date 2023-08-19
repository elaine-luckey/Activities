const doubleIt = function(num) {
    // return num * 2;
    if(num === undefined) {
        return false;
    }

}

// it('should double the value it gets', () => {
//      expect(doubleIt(5)).toEqual(10)
// }) 

it('should double the value it gets', () => {
    expect(doubleIt()).toEqual(false)
}) 