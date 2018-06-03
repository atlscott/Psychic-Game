// computer choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	
// totals/scoring
var wins = 0;
var losses = 0;
var guesses = 10;

// computer selection
var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// player guesses/list
var guessList = [];
	
// player selection / player guess
document.onkeyup = function(event) {
    var playerGuess = event.key.toLowerCase();

    function reset() {
        guesses = 10;
        guessList.length = 0;
    }

// compare player guess to computer selection  
    if (playerGuess == computerSelection) {
        wins++;
        alert("Great job! The answer was: " + computerSelection);
        guesses = 10;
        reset(guessList);
    }

    else {
        guesses--;
        guessList.push(playerGuess);
        if (guesses == 0) {
            losses++;
            reset(guessList);
            alert("Game Over, You Lose");
        }
    }
	
// displaying the totals and guesses on the page/html
	var html = "<p>Guess what letter I'm thinking of...</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Number of Guesses Left: " + guesses + "</p>" +
	"<p>Your Guesses so far: " + guessList + "</p>";
	
// Placing the html into the game div/ID #
	document.querySelector('#game').innerHTML = html;
}
	