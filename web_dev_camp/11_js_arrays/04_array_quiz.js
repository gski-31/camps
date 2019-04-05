// printReverse()
// print the each number in reveres of an array w/o reversing the array itself
let printReverse = () => {
    let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = myArray.length - 1; i >= 0; i--) {
        console.log(myArray[i]);
    }
}
printReverse();

// isUniform()
// returns true if all array elements are the same
let isUniform = (myArray) => {
    let myValue = myArray[0];
    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i] !== myValue) {
            return false;
        }
    }
    return true;
}
isUniform([1, 1, 1, 1, 1, 1]);
isUniform([1, 2, 3, 1, 2]);

// sumArray()
// add all numbers in array
let sumArray = (myArr) => {
    let finalValue = 0;
    for (let i = 0; i < myArr.length; i++) {
        finalValue += myArr[i];
    }
    return finalValue;
}
sumArray([1.2, 3.4, 5.6, 7.8, 9.1]);

// max()
// returns the largest number of array
let max = (myArr) => {
    let maxValue = myArr[0];
    for (let i = 1; i < myArr.length; i++) {
        if (maxValue < myArr[i]) {
            maxValue = myArr[i];
        }
    }
    return maxValue;
}
max([1.2, 3.4, 5.6, 7.8, 9.1]);