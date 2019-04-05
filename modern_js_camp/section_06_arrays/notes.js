// JAVASCRIPT ARRAYS

// ARRAY BASICS
/*
const myArr = ['item 001', 'item 002', 'item 003', 'item 004'];
// method heavy, [], length, etc...
// challenge - create 5 to-dos and print length

let toDo = ['refresh js skills', 'learn webpack', 'retain information', 'build an application', 'repeat']
console.log(`you have ${toDo.length} things on your list, the 1st is ${toDo[0]}`);
*/

// MANIPULATING ARRAYS WITH METHODS
// push pop / shift unshift etc...
// splice, 2 args (index, amount to remove, add item )
/*
let myArr = ['item 001', 'item 002', 'item 003', 'item 004'];
myArr.splice(2,1,'new item 003');
console.log(myArr);
myArr.splice(2, 0, 'item 002.5');
console.log(myArr);
*/
// challenge - take to-dos, delete 3rd item, add new item on end, delete 1st item
/*let toDo = ['refresh js skills', 'learn webpack', 'retain information', 'build an application', 'repeat']
toDo.splice(2,1);
toDo.push('repeat again');
toDo.unshift;
console.log(toDo);
*/

// LOOPING OVER ARRAYS
// forEach Loop
/*
let myArr = ['item 001', 'item 002', 'item 003', 'item 004'];
myArr.forEach(function(e, index){
    console.log(e);
    console.log(index);
});
*/
// challenge - print to-dos
/*
let toDo = ['refresh js skills', 'learn webpack', 'retain information', 'build an application', 'repeat']

toDo.forEach(function(e, i){
    console.log(`Item 0${i + 1} - ${e}`)
});
*/

// THE FOR LOOP
// let i = 0, array length, etc...

// SEARCHING ARRAYS
//myArr.indexOf('text in search of')
// let toDo = ['refresh js skills', 'learn webpack', 'retain information', 'build an application', 'repeat'];
// console.log(toDo.indexOf('repeat'));
/*
let notes = [{
    title: 'my next trip',
    body: 'I would like to go to Japan'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Main goal',
    body: 'Javascript refresher'
}];
*/
// findIndex like forEach but stops when it finds target
/*
function findNote(theArr, searchFor) {
    return theArr.findIndex(function (e) {
        return e.title === searchFor;  // case convert
    })
}

console.log(findNote(notes, 'Main goal'))
*/

//find is same as findIndex but returns the dta as opposed to index value
/*
function findNote(theArr, searchFor) {
    let index = theArr.find(function (e) {
        return e.title === searchFor; // case convert
    })
    return index;
}
console.log(findNote(notes, 'Main goal'))
*/
// challenge - create a function to remove to-do by text value
/*
let notes = [{
    title: 'my next trip',
    body: 'I would like to go to Japan'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Main goal',
    body: 'Javascript refresher'
}];

function removeToDo(arr, val){
    let newVal = arr.findIndex(function (e){
        return e.title === 'Habits to work on';
    })
    arr.splice(newVal, 1);
    console.log(arr);
}
removeToDo(notes, 'Habits to work on')
*/

// FILTERING ARRAYS
/*
let notes = [{
    title: 'my next trip',
    body: 'I would like to go to Japan'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Main goal',
    body: 'Javascript refresher'
}];

// filter returns a new array
function findNotes(arr, text){
    return arr.filter(function (e, index) {
        let titleMatch = e.title.toLowerCase().includes(text.toLowerCase())
        let bodyMatch = e.body.toLowerCase().includes(text.toLowerCase())
        return titleMatch || bodyMatch;
    });
}
console.log(findNotes(notes, 'go'));
*/
// challenge - filter out completed to-dos
/*
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

function stillLeft(arr){
    return arr.filter(function(e){
        return !e.completed;
    });
}
console.log(stillLeft(todos));
*/

// SORTING ARRAYS
/*
let notes = [{
    title: 'my next trip',
    body: 'I would like to go to Japan'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Main goal',
    body: 'Javascript refresher'
}];

function sortNotes(arr) {
    arr.sort(function (a, b) {
        // -1 = a comes first
        // 1 = b comes first
        // 0 = even
        if(a.title < b.title){
            return -1;
        } else if(b.title < a.title){
            return 1;
        } else {
            return 0;
        }
    });
}

sortNotes(notes);
console.log(notes);
*/
// challenge - sort to-dos
/*
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const sortToDos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {  // what comes first?
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortToDos(todos);
console.log(todos);
*/

// IMPROVE OUR EXPENSE TRACKER