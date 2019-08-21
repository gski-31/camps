const notes = ['note 01', 'note 02', 'note 03'];

// notes.push('new last item')
// notes.pop() // remove last item

// notes.unshift('new first item')
// notes.shift() // remove first item

// notes.splice(1,1);  // where to start, how many to remove
// notes.splice(1, 0, 'insert me');  // where to start, how many to remove, insert soemthing
notes.splice(1, 1, 'new 2nd item'); // similar to notes[1] = 'new 2nd item'

console.log(notes);
console.log(notes.length);
console.log(notes[notes.length-1]);
