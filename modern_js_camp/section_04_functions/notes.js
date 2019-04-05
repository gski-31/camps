// FUNCTIONS
// Create a F to C converter  // non arrow
/*
let fDeg = 89;

function cDeg(deg){
    return (deg - 32) * (5 / 9);
}

let c = cDeg(fDeg);
console.log(c);
*/

// undefined & null

// multiple & default arguments
//  var = value for a default

// create a tip calculator function
/*
function getTip(bill, percent = .2){
    return `the tip of $${bill * percent} would create a new total of $${bill * percent + bill}`;
}

var tip = getTip(85, .4);
console.log(tip);
*/

// function scope // {} stuff

// template strings  // back tick stuff

// CHALLENGE GRADE CALCULATOR
// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
/*
function calcGrade(correct, possible) {
    let percent = (correct / possible) * 100;
    letterGrade = 'F';
    if (percent >= 90) {
        letterGrade = 'A';
    } else if (percent >= 80) {
        letterGrade = 'B';
    } else if (percent >= 70) {
        letterGrade = 'C';
    } else if (percent >= 60) {
        letterGrade = 'D';
    }
    return `you got ${percent}% correct which is an ${letterGrade}`;
};

let grade = calcGrade(18, 20);
console.log(grade);
*/