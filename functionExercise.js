function sum(...arr) {
    let sum = 0
    if (arr.length === 1 && Array.isArray(arr[0])) {
        for (let i of arr[0])
            sum += i
        return console.log(sum)
    }

    for (let i of arr)
        sum += i
    return console.log(sum)
}
sum([1, 2, 3, 4, 5])


const circle = {
    radius: 1,

    get area() {
        return this.radius * this.radius * Math.PI
    }
}
console.log(circle.area)
circle.radius = 22
console.log(circle)