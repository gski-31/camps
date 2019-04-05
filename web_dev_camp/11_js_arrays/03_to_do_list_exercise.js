// Todo List
// "new" - Add A Todo
// "list" - List All Todos
// "delete" - Remove Specific Todo
// "quit" - Quit App

let myList = [];
let myPrompt = prompt('what are we doing?');

while (myPrompt !== 'quit') {
    if (myPrompt === 'new') {
        let newValue = prompt('add an item');
        myList.push(newValue);
    } else if (myPrompt === 'list') {
        myList.forEach(function (item, index) {  // names are irrelevant
            console.log(`*********\n ${index}: ${item}`);
        });
    } else if (myPrompt === 'delete') {
        let deleteMe = prompt('remove which?');
        myList.splice(deleteMe, 1); // index to delete, quantity of deletions
    }
    myPrompt = prompt('what are we doing?');
}
console.log('you quit');