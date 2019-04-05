///////////////////////////////////////
// Lecture: Hoisting
// calcAge(2001);

// function calcAge(year) {
//     console.log(2019 - year);
// }

// var calcRet = function (year) {
//     console.log(65 - (2019 - year));
// }

// calcRet(1974);

// console.log(age); // udefined
// var age = 31;
// console.log(age);

// function foo() {
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

// Example to show the differece between execution stack and scope chain

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }


///////////////////////////////////////
// Lecture: The this keyword

// console.log(this) // window

// calcAge(2001);

// function calcAge(year) {
//     console.log(2019 - year);
//     console.log(this);  // window
// }

// var john = {
//     name: 'your name',
//     other: 'more stuff',
//     callout: function(){
//         console.log(this.name);
//     }
// }

// john.callout();