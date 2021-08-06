function showProp(obj) {
    for (key in obj) {
        if (typeof(obj[key]) === 'string')
            console.log(key, obj[key])
    }
}

showProp({
    name: 'mo',
    age: 27,
    tall: 180,
    lname: 'mlatia'
})