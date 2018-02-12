//Variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var computerGuess = "";
var userGuess = "";

//Functions
function computer() {
computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

}

function start() {

document.onkeyup = function (event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   console.log(userGuess);

guessedLetters.push(userGuess);



//if user wins, their win count goes up and the game restarts without resetting stats
if (userGuess === computerGuess) {
    wins++;
    alert("You won! You're a legit psychic! The correct letter was " + computerGuess);
    guessesLeft = 10;
    guessedLetters = [];
    computer();
    start();
    console.log(wins);
    console.log("The letter I am thinking of is " + computerGuess);
//when guesses reach 0, the game restarts without resetting stats
} else if (userGuess) {
    guessesLeft--;
    console.log(guessesLeft);
    console.log(guessedLetters);
    console.log("The letter I am thinking of is " + computerGuess);
// } if (SOMETHING HERE IN A SECOND) {
//     alert("You can only guess letters! Now we have to start over!");
//     losses=0;
//     wins=0;
//     guessedLetters=[];
//when the user loses, their losses goes up and the game restarts without resetting stats
} if (guessesLeft === 0) {
    losses++;
    guessesLeft = 10;
    guessedLetters = [];
    computer();
    alert("Well... You tried.");
;    console.log(losses);
}

console.log("Wins: " + wins);
console.log("Losses: " + losses);
console.log("Guesses Left: " + guessesLeft);

var html = "<p>Wins: " + wins + "</p>" + 
"<p>Losses: " + losses + "</p>" + 
"<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Guessed Letters: " + guessedLetters + "</p>";

document.querySelector('#game').innerHTML = html;
}
}


start();
computer(computerGuess);
console.log("The letter I am thinking of is " + computerGuess);
console.log(userGuess);