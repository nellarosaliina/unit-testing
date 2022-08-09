

const { multiply, addition, division, substraction } = require(".")

describe("calculator.js tests", () => {

    it("multiply works perfectly", () => {
        expect(multiply(5, 2)).toEqual(10);
    })

    it("addition works perfectly", () => {
        expect(addition(4, 4)).toEqual(8);
    })

    
    it("substraction works perfectly", () => {
        expect(substraction(10, 5)).toEqual(5);
    })

    it("division works perfectly", () => {
        expect(division(10, 2)).toEqual(5);
    })

});