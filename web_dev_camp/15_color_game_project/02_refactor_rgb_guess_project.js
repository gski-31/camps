let numberOfSquares = 6;  // replace in areas below
let colors = generateRandomColors(numberOfSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let banner = document.querySelector('#banner');
let resetButton = document.querySelector('#reset');  // DO NOT USE QS-ALL on SINGLE ITEMS
// let easyButton = document.querySelector('#easy_button');
// let hardButton = document.querySelector('#hard_button');
let modeButton = document.querySelectorAll('.mode');

// easyButton.addEventListener('click', () => {
//     numberOfSquares = 3;
//     easyButton.classList.add('selected');
//     hardButton.classList.remove('selected');
//     // Similar to reset
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = 'none' // used none instead of harding coding bg color
//         }
//     }
// });

// hardButton.addEventListener('click', function() {
//     numberOfSquares = 6;
//     easyButton.classList.remove('selected');
//     hardButton.classList.add('selected');
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = 'block'  // set hidden back to block
//     }
// });

for (let i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener('click', function () {
        // remove class from both
        modeButton[0].classList.remove('selected');
        modeButton[1].classList.remove('selected');
        // apply class to selected
        this.classList.add('selected');
        // sqaures to show
        this.textContent === 'EASY' ? numberOfSquares = 3 : numberOfSquares = 6;
        reset();
        // pick new colors
        // get new picked color
        // update page
    });
}

let reset = () => {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'NEW COLORS';
    messageDisplay.textContent = '';
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block'; // set sqaures to display staright away before potential removing
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    banner.style.background = '#181818';
}

// resetButton.addEventListener('click', function() {
//     //generate new colors
//     colors = generateRandomColors(numberOfSquares);  // don't set number in here as it is set elsewhere
//     //new random color from array
//     pickedColor = pickColor();
//     //change colorDisplay to match picked Color
//     colorDisplay.textContent = pickedColor;
//     this.textContent = 'NEW COLORS';
//     messageDisplay.textContent = '';
//     //change colors of squares
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//     }
//     banner.style.background = '#181818';
// });

resetButton.addEventListener('click', function() {
    reset();
});


colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener('click', function () {
        //grab color of clicked squares
        let clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'BINGO   :-)';
            resetButton.textContent = 'PLAY AGAIN???';
            changeColors(clickedColor);
            banner.style.background = clickedColor;
        } else {
            this.style.background = '#414141';
            messageDisplay.textContent = 'NOPE   :P';
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    //add num random colors to arr
    for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;  // sapces are a must
}
