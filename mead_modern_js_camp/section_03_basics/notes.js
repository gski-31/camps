// STRINGS CHALLENGE
/*
// Create a variable to store the city
let city = 'San Diego'
// Create a variable to store the state
let state = 'California'
// Create a variable to combine the city and state
let location = city + ', ' + state
// Print the combined location to the terminal
console.log(location)
*/

// NUMBERS CHALLENGE
// Create a number/test grader
/*
let questionTotal = 20, questionCorrect = 19, score;
score = questionCorrect / questionTotal;
console.log(`you got ${score * 100}% correct`);
*/

// TEMPERATURE CHALLENGE
// Convert F to C & K
/*
let degF = 89;
let degC = (degF - 32) *  (5 / 9 );
let degK = (degF - 32) * (5 / 9) + 273.15;

console.log(`${degF}-F degrees is equal to ${degC}-C degrees and ${degK}-K degrees`)
*/

// BOOLEANS & COMPARISON CHALLENGE
// Create age set to your age
/*
let age = 35;
// Calculate is child - if they are 7 or under
let isChild = (age <= 7);
// Calculate is senior - if they are 65 or older
let isSenior = (age >= 65)
// Print is child value
console.log(isChild);
// Print is senior value
console.log(isSenior);
*/

// IF STATEMENT CHALLENGE
/*
let age = 5;

// If 7 or under print message about child pricing
age <= 7 ? console.log('you are free') : console.log('pay up');

// If 65 or older print message about senior discount
age >= 65 ? console.log('you are free') : console.log('pay up');
*/

// IF ELSE CHALLENGE
/*
let temp = 89

if (temp >= 100) {
    console.log('you will melt')
} else if (temp <= 45) {
    console.log('you will freeze')
} else {
    console.log('enjoy the day')
}
*/

// AND OR CHALLENGE
/*
let isGuestOneVegan = false
let isGuestTwoVegan = true

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, Offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('lawn clippings for all')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('lawn clippings for one, cow for the other')
} else {
    console.log('cow all around')
}
*/

// SCOPE
// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope