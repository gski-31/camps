/* CHALLENGE: convert F ot C and K */

let F = 32
let C = Math.round((F - 32) * (5 / 9))
let K = Math.round((F + 459.67) * (5 / 9))

console.log(`${F}_F is ${C}_C and ${K}_K`)