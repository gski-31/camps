// Print all numbers between - 10 and 19
let i = -10;
while (i <= 19){
    console.log(i);
    i++;
}

// Print all multiples of 10 between 10 and 40
let i = 10;
while(i <= 40){
    console.log(i);
    i+=10;
}

// Print all odd numbers between 300 and 333
let i = 300;
while(i <= 333){
    if(i%2 !== 0){
        console.log(i);
    }
    i++;
}

// Print all numbers divisible by 5 and 3 between 5 and 50
let i = 5;
while(i <= 50){
    if(i%3 == 0 && i%5 == 0){
        console.log(i);
    }
    i++;
}



