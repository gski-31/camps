let numberOfSquares = 6;
let colors = []; // EMPTY COVERED BY reset()
let pickedColor; // EMPTY COVERED BY reset()

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let banner = document.querySelector('#banner');
let resetButton = document.querySelector('#reset');
let modeButton = document.querySelectorAll('.mode');

init();

function init(){
    // MODE BUTTONS
    for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener('click', function () {
            modeButton[0].classList.remove('selected');
            modeButton[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'EASY' ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }

    for (let i = 0; i < squares.length; i++) {
        // squares[i].style.background = colors[i];  // COVERED BY reset()
        squares[i].addEventListener('click', function () {
            let clickedColor = this.style.background;
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
    reset(); // GENERATE COLORS
}

function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'NEW COLORS';
    messageDisplay.textContent = '';
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    banner.style.background = '#181818';
}

resetButton.addEventListener('click', function () {
    reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
