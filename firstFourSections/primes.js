function isPrime(x) {

    if (x === 2) {
        return true
    } else {
        for (let i = 2; i < x; i++) {
            if (x % i === 0)
                return false
        }
        return true
    }
}

function primesNum(num) {
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            console.log(i)
    }
}
primesNum(10)
    // console.log(isPrime(21))