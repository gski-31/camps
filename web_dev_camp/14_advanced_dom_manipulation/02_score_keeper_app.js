// Page Elements
let score_01 = document.querySelector('#score_01');
let score_02 = document.querySelector('#score_02');
let player_one_button = document.querySelector('#player_one_button');
let player_two_button = document.querySelector('#player_two_button');
let reset_button = document.querySelector('#reset_button');
let play_to_input = document.querySelector('#play_to_input');
let play_to_value = document.querySelector('#play_to_value');

// Variables
let player_one_score = 0;
let player_two_score = 0;

let game_over = false;
let winning_score = 7;

// Dynamics
// BUTTONS CAN BE MORE "DRY" DOWN THE ROAD
player_one_button.addEventListener('click', () => {
    if (!game_over) {
        player_one_score++;
        if (player_one_score === winning_score) {
            score_01.classList.add('winning_score');
            game_over = true;
        }
        score_01.textContent = player_one_score;
    }
});

player_two_button.addEventListener('click', () => {
    if (!game_over) {
        player_two_score++;
        if (player_two_score === winning_score) {
            score_02.classList.add('winning_score');
            game_over = true;
        }
        score_02.textContent = player_two_score;
    }
});

// REFACTOR RESET TO A FUNCTION TO BE ADDED TO PLAYER INPUT
reset_button.addEventListener('click', () => {
    // player_one_score = 0;
    // player_two_score = 0;
    // score_01.textContent = 0;
    // score_02.textContent = 0;
    // score_01.classList.remove('winning_score');
    // score_02.classList.remove('winning_score');
    // game_over = false;
    reset();
})

let reset = ()=>{
    player_one_score = 0;
    player_two_score = 0;
    score_01.textContent = 0;
    score_02.textContent = 0;
    score_01.classList.remove('winning_score');
    score_02.classList.remove('winning_score');
    game_over = false;
}

play_to_input.addEventListener('change', () => {
    play_to_value.textContent = play_to_input.value;
    winning_score = Number(play_to_input.value);  // force to number
    reset(); // refactored reset
})