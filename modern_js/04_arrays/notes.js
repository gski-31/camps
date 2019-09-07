/* ---------- Basic Arrays ------------------ */

// const notes = ['note 01', 'note 02', 'note 03'];

// notes.push('new last item')
// notes.pop() // remove last item

// notes.unshift('new first item')
// notes.shift() // remove first item

// notes.splice(1,1);  // where to start, how many to remove
// notes.splice(1, 0, 'insert me');  // where to start, how many to remove, insert soemthing
// notes.splice(1, 1, 'new 2nd item'); // similar to notes[1] = 'new 2nd item'

// console.log(notes);
// console.log(notes.length);
// console.log(notes[notes.length-1]);

/* ---------- forEach ------------------ */

// const notes = ['note 01', 'note 02', 'note 03'];

// notes.forEach((note, index)=>{
//     console.log(`Item ${index+1}: ${note}`);
// })

/* ---------- for loop ------------------ */

// basic info about

/* ---------- search array ------------------ */

// const notes = ['note 01', 'note 02', 'note 03'];

// console.log(notes.indexOf('note 03'));
// console.log(notes.indexOf('02')); // -1

/* ---------- search array of objects ------------------ */

const notes = [{
    title: 'note 01',
    body: 'this is the first note'
}, {
    title: 'note 02',
    body: 'this is the second note'
}, {
    title: 'note 03',
    body: 'this is the third note'
}];

const index = notes.findIndex((note, index)=>{
    console.log(note)
    return note.body === 'this is the third note'
})

console.log(index)




