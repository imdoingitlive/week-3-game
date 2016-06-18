var letters = ['a', 'b', 'c'];
var guesses = [];
var hiddenLetter = null;
var totalGuesses = 9;
var guessesLeft = 9;
var losses = 0;

var newGL = function(){
	document.querySelector('#guessesLeft').innerHTML = guessesLeft;
};
	
var newHiddenLetter = function(){
	this.hiddenLetter = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var newGuesses = function(){
	document.querySelector('#guesses').innerHTML = guesses.join(', ');
};

var reset = function(){
	totalGuesses = 9;
	guessesLeft = 9;
	guesses = [];
	newHiddenLetter();
	newGL();
	newGuesses();
}
	
newHiddenLetter();
newGL();

document.onkeyup = function(event) {
	guessesLeft--;

	var letter = String.fromCharCode(event.keyCode).toLowerCase();
		
	guesses.push(letter);

	newGL();
	newGuesses();

	if (guessesLeft > 0){

	if (letter == hiddenLetter){
		wins++;
		document.querySelector('#wins').innerHTML = wins;
		reset();
	}
	}else if(guessesLeft == 0){
			losses++;
			document.querySelector('#losses').innerHTML = losses;
			reset();
		}
	};