let guessingGame = (number)=> {
    let guess = prompt('pick anumber 1 through 10');
    if(guess === number){
        alert('Bingo');
    } else if (guess > number){
        alert('too high');
    } else {
        alert('too low')
    }
}
// continue later with a loop and boolean
guessingGame(7);