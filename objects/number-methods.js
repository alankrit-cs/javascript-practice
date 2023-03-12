let min = 1;
let max = 5;

let makeGuess = function(guessedNumber){
    let randomNumber =Math.floor(Math.random() * (max-min+1) +min);
    console.log(randomNumber);
    return guessedNumber===randomNumber;
}

console.log(makeGuess(1))
console.log(makeGuess(3))
console.log(makeGuess(4))
console.log(makeGuess(5))
console.log(makeGuess(2))


let number = 103.9723
//To get fixed number of digits after decimal
console.log(number.toFixed(2))

//To round off number
console.log(Math.round(number))

