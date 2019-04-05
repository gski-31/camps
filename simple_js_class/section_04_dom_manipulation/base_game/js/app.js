/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

init();
// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;
// dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('.dice').style.display = 'none';

// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

// EVENT HANDLERs

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) { // wrap in state variable
        // 1. random Number
        dice = Math.floor(Math.random() * 6) + 1;
        // 2. display result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'img/dice-' + dice + '.png';
        // 3. update the round score IF rolled number != 1
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            // roundScore = 0;
            // document.getElementById('current-0').textContent = '0';
            // document.getElementById('current-1').textContent = '0';
            // //4. toggle active class between players
            // document.querySelector('.player-0-panel').classList.toggle('active');
            // document.querySelector('.player-1-panel').classList.toggle('active');
            // //5. hide dice on roll of 1
            // document.querySelector('.dice').style.display = 'none';
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. add to scores
        scores[activePlayer] += roundScore;
        // 2. display scores
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        // 3. check if player won
        if (scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false; // state variable
        } else {
            nextPlayer();
        }
        // scores[activePlayer] >= 100 ? document.getElementById('name-' + activePlayer).textContent = 'WINNER!' : nextPlayer();
        // 4. change player
        // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // roundScore = 0;
        // document.getElementById('current-0').textContent = '0';
        // document.getElementById('current-1').textContent = '0';
        // //4a. toggle active class between players
        // document.querySelector('.player-0-panel').classList.toggle('active');
        // document.querySelector('.player-1-panel').classList.toggle('active');
        // //4b. hide dice on roll of 1
        // document.querySelector('.dice').style.display = 'none';
        // nextPlayer();
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //4. toggle active class between players
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //5. hide dice on roll of 1
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}