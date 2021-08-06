function sum(num) {
    let count = 0
    for (i = 1; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            count += i
    }
    console.log(count)
}
sum(10)