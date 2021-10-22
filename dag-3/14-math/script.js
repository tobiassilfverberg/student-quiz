/**
 * Math
 */

let random = Math.random();
let randomMultiplied = random * 10;
let roundedRandomMultiplied = Math.ceil(randomMultiplied);

let randomNumber = Math.ceil( Math.random() * 10 );

//console.log(Math.ceil(randomNumber));

function getRandomNumber() {
    return Math.ceil( Math.random() * 10 );
}

for (let i = 0; i < 10; i++) {
    let randomNumber = getRandomNumber();
    console.log("Random number is:", randomNumber);
}