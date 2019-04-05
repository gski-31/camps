let average = (arr)=> {
    let sum = arr.reduce((total, amount) => total + amount);
    return Math.round(sum/arr.length);
}

let arr01 = [29.76, 41.85, 46.5];
let arr02 = [56, 2, 45, 23, 68, 98, 75, 652, 134, 15948, 231, 1];

console.log(average(arr01));
console.log(average(arr02));
