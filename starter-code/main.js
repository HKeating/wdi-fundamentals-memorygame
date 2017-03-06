console.log("JS file is connected to HTML! Woo!")

//Get element with id 'game-board'
var gameBoard = document.getElementById('game-board');

//declaring variables for cards and cardsInPlay
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//function to createBoard
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
	//create new div
	var cardElement = document.createElement('div');
	//give it class name 'card'
	cardElement.className = 'card';
	//append it to gameBoard
	gameBoard.appendChild(cardElement);
	//give card data-card attribute
	cardElement.setAttribute('data-card', cards[i]);
	//give each a card a click event listener
	cardElement.addEventListener('click', isTwoCards);
	}
}
// call the createBoard function
createBoard();

//function to test if two in-play cards are a match
function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		window.alert('You found a match!')
	}
	else {
		window.alert('Sorry, try again.')
	};
	//clear inner HTML of cards after isMatch has run
	for (i = 0; i < cards.length; i++) {
		document.getElementsByClassName('card')[i].innerHTML = '';
	}
}

//checks to see if there are cards in play
function isTwoCards() {
	//add card to array of cards in play
	cardsInPlay.push(this.getAttribute('data-card'));
	//set card images
	if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = '<img src="my_queen.png" alt="Queen of Spades" />';
	}
	else if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="my_king.png" alt="King of Spades" />';
	};

	//if there are 2 cards in play, check for match
	if(cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}





