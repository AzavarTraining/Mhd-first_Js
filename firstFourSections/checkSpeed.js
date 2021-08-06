function checkSpeed(speed) {
    if (speed < 74)
        return "Ok"

    let point = Math.floor((speed - 70) / 5)
    if (point <= 12)
        return (`point : ${point}`)

    return 'license suspeded'
}

console.log(checkSpeed(73))
console.log(checkSpeed(87))
console.log(checkSpeed(180))