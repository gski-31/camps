// typical let vs const discussion, name is a const age is a let, etc...

// blocks and iife

{
// block statement
const a = 1;
let b = 2;
var c = 3;  // vars are not block scoped and can be accessed outside
}

console.log(a + b);  // wouldnt work as inside block
console.log(c); // would work.

