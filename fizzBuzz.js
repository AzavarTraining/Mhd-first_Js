function fizzBuzz(input) {
    if (typeof input === "number") {
        if (input % 3 === 0 && input % 5 !== 0) {
            console.log("fizz")
        } else if (input % 5 === 0 && input % 3 !== 0) {
            console.log('Buzz')
        } else if (input % 5 === 0 && input % 3 === 0) {
            console.log("fizzBuzz")
        } else
            console.log(input)
    } else
        console.log("Not a number")
}
fizzBuzz(9)
fizzBuzz(15)
fizzBuzz(20)
fizzBuzz(7)
fizzBuzz('mo')