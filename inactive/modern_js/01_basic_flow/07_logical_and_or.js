/* CHALLENGE
2 guests, 2 diets, give options
*/

let g1 = true
let g2 = false

if (g1 === true && g2 === true){
    console.log('v menu')
} else if (g1 === true || g2 === true){
    console.log('m menu')
} else {
    console.log('n menu')
}