const fizzbuzzz = require('./fizzbuzz.js');

describe("fizzbuzz.js tests", () => {

    it('should return "Fizz" if a is divisible by 3', () => {
        expect(fizzbuzzz.solve(3)).toEqual("Fizz");
        expect(fizzbuzzz.solve(6)).toEqual("Fizz");
        expect(fizzbuzzz.solve(9)).toEqual("Fizz");
    });

    
    it('should return "Buzz" if a is divisible by 5', () => {
        expect(fizzbuzzz.solve(5)).toEqual("Buzz");
        expect(fizzbuzzz.solve(10)).toEqual("Buzz");
        expect(fizzbuzzz.solve(20)).toEqual("Buzz");
    });

    
    // it('should return "FizzBuzz" if a is divisible by 3 and 5', () => {
    //     expect(fizzbuzzz.solve(15)).toEqual("FizzBuzz");
    // });



});