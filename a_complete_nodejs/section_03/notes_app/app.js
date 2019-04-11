const getNotes = require('./notes.js');
// const validator = require('validator');
const chalk = require('chalk');

const msg = getNotes();

console.log(msg);

// play with validator
// console.log(validator.isEmail('nope@nada.net'));
// console.log(validator.isEmail('dfdasfdsafdsa'));
// console.log(validator.isURL('www.google.com'));

// CHALLENGE
/* install chalk
load chalk
print 'success'
*/

console.log(chalk.yellowBright.bgGreen.bold('success'));






