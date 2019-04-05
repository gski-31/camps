// // normal object

// var jason = {
//     name: 'jason',
//     number: 31,
//     job: 'mail_chimp'
// };

// // Function Constructor

// var Person = function (name, number, job) {
//     this.name = name;
//     this.number = number;
//     this.job = job;
//     // this.doubleNumber = function(){
//     //     console.log(this.number * 2);
//     // }
// };

// // Prototype to function

// Person.prototype.doubleNumber = function () {
//     console.log(this.number * 2);
// };

// var regan = new Person('regan', 24, 'hr');
// // regan.doubleNumber();
// var emma = new Person('emma', 4, 'kid');
// var jay = new Person('jay', 32, 'friend');

// regan.doubleNumber();
// emma.doubleNumber();
// jay.doubleNumber();



// var Character = function(name, series){
//     this.name = name;
//     this.series = series;
// };

// var walter = new Character('walter', 'breaking bad');
// var cad = new Character('cad bane', 'clone wars');

// Character.prototype.media = "TV";

// console.log(walter.media);
// console.log(cad.media);

// OBJECT CREATE OBJECTS

// var personProto = {
//     calcAge: function(){
//         console.log(2019 - this.birthYear);
//     }
// };

// var john = Object.create(personProto, {
//     name: { value: 'john'},
//     job: { value: 'web'},
//     birthYear: { value: 1921}
// });

// PRIMITIVES vs OBJECTS

// FUNCTIONS AS ARGUMENTS // FIRST CLASS FUNCTION

// var years = [1974, 2002, 1979, 1984, 1999];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     // arr.forEach(e => {
//     //     arrRes.push(fn(arr[e]));
//     // });
//     for(let i = 0 ; i < arr.length ; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// // callback function

// function calcAge(el) {
//     return 2019 - el;
// }

// function isFullAge(el){
//     return el >= 21;
// }

// function maxHeartRate(el){
//     return 206.9 - (0.67 * el);
// }

// var ages = arrayCalc(years, calcAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var maxRate = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(maxRate);

// FUNCTION RETURNS FUNCTION

// function interviewQuestion(job) {  // could use switch as well
//     if (job == 'designer') {
//         return function (name) {
//             console.log(name + ', do you know adobe?')
//         }
//     } else if (job == 'teacher') {
//         return function (name) {
//             console.log(name + ', k-12?')
//         }
//     } else {
//         return function (name) {
//             console.log(name + ', what do you do?')
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('bill')

// var designerQuestion = interviewQuestion('designer');
// designerQuestion('don');
// designerQuestion('jim');
// designerQuestion('tom');

// interviewQuestion('teacher')('susan');

// function theBalls(sport) {
//     if (sport === 'nfl') {
//         return function (ball) {
//             console.log('you fellas throw a ' + ball);
//         }
//     } else if (sport === 'nba') {
//         return function (ball) {
//             console.log('you fellas shoot a ' + ball)
//         }

//     } else {
//         return function (ball) {
//             console.log('take your ' + ball + ' and go home, not a real sport');
//         }
//     }
// }

// theBalls('mlb')('baseball');
// theBalls('nfl')('football');

// IIFE

//write function within () and end with (param);

// not accessible outside

// can only be called once

// CLOSURES

// function retirement(retirementAge){
//     var a = ' years left to retirement';
//     return function(yearOfBirth){
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirmentUS = retirement(66);

// retirmentUS(1974);

// retirement(66)(1980);

// BIND, CALL & APPLY

// var jason = {
//     name: 'jason',
//     number: 31,
//     job: 'mail chimp',
//     presentation: function(style, timeOfDay){
//         style == 'formal' ? console.log('good ' + timeOfDay + ' ladies and gentlemen, i am a ' + this.number + ' year old ' + this.job) : console.log("what's crackin this " + timeOfDay + ", i am a " + this.number + ' year old ' + this.job);
//     }
// };

// var regan = {
//     name: 'regan',
//     number: 26,
//     job: 'hrm',
// };

// // jason.presentation('whatever', 'evening');

// // jason.presentation.call(regan, 'formal', 'am');

// // jason.presentation.apply(regan, ['formal', 'am']);

// var jasonNonFormal = jason.presentation.bind(jason, 'whatever');

// jasonNonFormal('evening');
// jasonNonFormal('night');

// // bind presets arguments

// var reganFormal = jason.presentation.bind(regan, 'formal');

// reganFormal('mid day');





