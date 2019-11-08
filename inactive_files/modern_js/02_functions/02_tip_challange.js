/* Challenge: use function to create tips */

let tipCalc = (total, percent = .2)=>{
    let tip = parseFloat((total * percent).toFixed(2));
    return `on a $${total} bill, leave $${tip} for a total of $${total + tip}`
}

console.log(tipCalc(50, .15));
console.log(tipCalc(100));
console.log(tipCalc(88.62, .06));