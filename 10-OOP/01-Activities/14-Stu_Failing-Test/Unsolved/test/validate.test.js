// TODO: Import the Validate class.
const validate = require ("../validate");


// TODO: Describe a testing suite for checking the functionality of the Validate class.

describe('Validate', () => {
    describe("pass", () => {
        it("should pass", () => {
            const password = "";
            expect(Validate.isPassword(password)).toBe(null);
        })
    })

})

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
