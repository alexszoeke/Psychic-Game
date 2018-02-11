//Variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
console.log(alphabet.length);

//Function
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   console.log(userGuess);
onkeyup = /a-z/;

guessedLetters.push(userGuess);

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);

//if user wins, their win count goes up and the game restarts without resetting stats
if (userGuess === computerGuess) {
    wins++;
    alert("You won! You're a legit psychic!")
    guessesLeft = 10;
    guessedLetters = [];
    console.log(wins);
//when guesses reach 0, the game restarts without resetting stats
} else if (userGuess) {
    guessesLeft--;
    console.log(guessesLeft);
    console.log(guessedLetters);
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

