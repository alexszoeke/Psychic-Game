//Variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var computerGuess = "";
var userGuess = "";

//Functions

//This function randomly generates the computers guess and places it into the computer variable above
function computer() {
computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

}


//starts the games
function start() {

//users guess
document.onkeyup = function (event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    
    //Pushes the guessed letters into the array
    guessedLetters.push(userGuess);



//if user wins, their win count goes up and the game restarts without resetting stats
if (userGuess === computerGuess) {
    wins++;
    alert("You won! You're a legit psychic! The correct letter was " + computerGuess);
    guessesLeft = 10;
    guessedLetters = [];
    computer();
    start();
//when guesses reach 0, the game restarts without resetting stats
} else if (userGuess) {
    guessesLeft--;
} if (guessesLeft === 0) {
    losses++;
    guessesLeft = 10;
    guessedLetters = [];
    computer();
    alert("Well... You tried.");
}

//see what's going on in the console
console.log("Wins: " + wins);
console.log("Losses: " + losses);
console.log("Guesses Left: " + guessesLeft);


//rewrite the stats in my html
var html = "<p>Wins: " + wins + "</p>" + 
"<p>Losses: " + losses + "</p>" + 
"<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Guessed Letters: " + guessedLetters + "</p>";

document.querySelector('#game').innerHTML = html;
}
}


//functions called
start();
computer(computerGuess);
//hidden answer and the users guesses
console.log("The letter I am thinking of is " + computerGuess);
