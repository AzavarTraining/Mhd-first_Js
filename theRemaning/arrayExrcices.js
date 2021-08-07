function findValue(arr, num) {
    for (let i in arr) {
        if (arr[i] === num)
            return true
    }
    return false

}

console.log(findValue([1, 2, 3, 4], 3))

function move(arr, index, offset) {
    newPosition = index + offset
    if (newPosition < 0 || newPosition > arr.length) {
        return console.error('out of range')
    }
    const temp = [...arr]
    const element = temp.splice(index, 1)[0]
    temp.splice(index + offset, 0, element)
    console.log(temp)
}

move([1, 2, 3, 4], 2, 2)

function counter(arr, num) {
    const count = arr.reduce((accumulator, currentValue) => {
        if (currentValue === num)
            accumulator++
            return accumulator
    }, 0)
    return console.log(count)
}
counter([1, 1, 1, 2, 3, 4], 1)


function max(arr) {
    const max = arr.reduce((accumulator, currentValue) => {
        if (accumulator < currentValue)
            accumulator = currentValue
        return accumulator
    }, arr[0])
    return console.log(max)
}
max([-1, -2, -3, -4, -5])





function getMovie(arr) {
    const movies = arr.filter(({ year, rate }) => {
        return (year === 2018 && rate > 4)
    }).sort((a, b) => { return a.rate - b.rate }).reverse().map(value => { return value.title })


    console.log(movies)


}
const movie = [
    { title: 'a', year: 2018, rate: 4.5 },
    { title: 'b', year: 2017, rate: 4.5 },
    { title: 'c', year: 2018, rate: 3 },
    { title: 'd', year: 2018, rate: 4.7 }
]
getMovie(movie)