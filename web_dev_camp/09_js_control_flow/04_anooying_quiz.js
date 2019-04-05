let annoy = () => {
    let answer = false;
    while (answer === false) {
        let question = prompt('are we there yet?')
        if (question == 'yes') {
            answer = true;
            alert('we made it');
        }
    }
}

annoy();

// instructor solution below is shorter but !DRY

let annoy2 = () => {
    let answer = prompt('are we there yet?');
    if (answer !== 'yes') {
        let answer = prompt('are we there yet?');
    }
    alert('we made it');
}
annoy2();

// string just has to contain yes // undex of / -1 equals non existant

let annoy3 = () => {
    let answer = false;
    while (answer === false) {
        let question = prompt('are we there yet?')
        if (question.indexOf('yes') !== -1) {
            answer = true;
            alert('we made it');
        }
    }
}

annoy3();