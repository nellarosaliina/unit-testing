function solve(a) {
    if (a % 3 === 0)
        return "Fizz"
    if (a % 5 === 0)
        return "Buzz"
    if (a % 3 === 0 && a % 5 === 0)
        return "FizzBuzz"
    else return ""
}


module.exports.solve = solve;