console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//if statement from unit 9
/*if (cardOne === cardFour) {
	window.alert('You found a match!')
}
else {
	window.alert('Sorry, try again.')
} */

//Get element with id 'game-board'
var gameBoard = document.getElementById('game-board');

//function to create cards
var createCards = function() {
	//loop 4 times
	for (var i = 0; i < 4; i++) {
	//create new div
	var newCard = document.createElement('div');
	//give it class name 'card'
	newCard.className = 'card';
	//append it to gameBoard
	gameBoard.appendChild(newCard);
	}
}

//calling the function to create cards
createCards();
