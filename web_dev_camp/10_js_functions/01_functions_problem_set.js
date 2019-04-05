// Check if number is even

let isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

isEven(8);
isEven(7);

// Write a factorial function

let factorial = (number) => {
    if (number === 0) {
        return 1;
    } else {
        let total = number;
        while (number > 0) {
            total = total * number;
            number--;
        }
        return total;
    }
}

factorial(10);

// kebab to snake
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

let kebabToSnake =(string)=>{
    var new_string = string.replace(/-/g, "_");
    return new_string;
}
kebabToSnake('convert-me-to-snake');

