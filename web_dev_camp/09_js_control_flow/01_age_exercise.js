function checkAge(age) {
    if (age % Math.sqrt(age) == 0) {
        console.log(`perfect square`)
    } else if (age < 0) {
        console.log(`errror`)
    } else if (age === 21) {
        console.log(`happy 21st`)
    } else if (age % 2 == 1) {
        console.log(`odd number`)
    } else {
        console.log(`you are ${age}`)
    }
}

checkAge(15);