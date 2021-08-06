function countTrouthy(array) {
    let counter = 0
    array.forEach(element => {
        if (element && true)
            counter++
    });
    console.log(counter)
}
countTrouthy([1, , 2, 0, null, ''])