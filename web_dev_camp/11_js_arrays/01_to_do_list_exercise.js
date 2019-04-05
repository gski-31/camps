// TO DO LIST
// • "new" add a todo
// • "list" view all todo
// • "quit" quit app

let theList = [];
let thePrompt = prompt('what to do?');

while (thePrompt !== 'quit') {
    if (thePrompt === "list") {  // == or === not =
        console.log(theList);
    } else if (thePrompt === "new") {
        let newValue = prompt('add an item');
        theList.push(newValue);
    }
    thePrompt = prompt('what to do?'); // reset the prompt to original value for next loop through
}
console.log('you quit the app');

