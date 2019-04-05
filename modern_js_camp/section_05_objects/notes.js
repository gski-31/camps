// OBJECT BASICS
// challenge - create an object and access it's values
/*
let jason = {
    name: 'Jason',
    city: 'San Diego',
    job: 'Web Developer'
}

console.log(`${jason.name} is a ${jason.job} from ${jason.city}`);
jason.city = 'San Antonio'
console.log(`${jason.name} is a ${jason.job} from ${jason.city}`);
*/

// OBJECT FUNCTIONS
// Challenge - Create function - take fahrenheit in - return object with all three
/*
function threeTemps(degF){
    return {
        far: degF,
        cel: (degF - 32) * (5 / 9),
        kel: (degF - 32) * (5 / 9) + 273.15
    }
}

console.log(threeTemps(64));
*/

// OBJECT REFERENCES
// challenge - build an expense tracker , add income, reset, add expense, get summary
/*
let myAccount = {
    name: 'Jason',
    income: 230000,
    expenses: 4200
}

function addIncome(account, amount) {
    account.income += amount;
};

function addExpense(account, amount) {
    account.expenses += amount;
};

function resetAccount(account) {
    account.income = 0;
    account.expenses = 0;
};

function getSummary(account) {
    return `${account.name} has a monthly income of $${account.income} with expenses of $${account.expenses}`;
};

console.log(getSummary(myAccount));
resetAccount(myAccount);
console.log(getSummary(myAccount));
addIncome(myAccount, 255000)
console.log(getSummary(myAccount));
addExpense(myAccount, 5000)
console.log(getSummary(myAccount));
*/

// METHODS
/*
let restaurant = {
    name: 'La Puerta',
    guestCapacity: 80,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount -= partySize;
    },
    removeParty: function (partySize) {
        this.guestCount += partySize;
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
*/
// STRING METHODS
/*
let name = 'Jason G'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abcde123456'
console.log(password.includes('password'))

// Trim - removes extra spaces on each end
console.log(name.trim())
*/
// Challenge area
// check if password is valid > 8 and does not include password
/*
function pwIsValid(password){
password.length >= 8 && !password.includes('password') ? console.log('your password is valid') : console.log('your password needs work');
};

pwIsValid('12345');
pwIsValid('1234password5');
pwIsValid('123gfsgfsgfsgfdsg45');
*/

// NUMBER METHODS
/*
let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
*/
// Challenge area
// 1 - 5 - true if correct - false if not correct
// let makeGuess = function (min, max, guess) {
//     let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

//     return guess === randomNum
// }

// console.log(makeGuess(2,8,6))

// CONSTANT VARIABLES
// constants don't change, etc...

// VAR VARIABLES


















