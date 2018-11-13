//MAIN ARRAY
var cards = [ 
	{
		rank:"queen" ,
	 	suit:"hearts" ,
	  	cardImage:"images/queen-of-hearts.png" 
	},
	{
		rank:"queen" ,
	 	suit:"diamonds" ,
	  	cardImage:"images/queen-of-diamonds.png" 
	},
	{
		rank:"king" ,
	 	suit:"hearts" ,
	  	cardImage:"images/king-of-hearts.png" 
	},
	{
		rank:"king" ,
	 	suit:"diamonds",
	  	cardImage:"images/king-of-diamonds.png" 
	}
];


var cardsInPlay = [];
var cardsOnBoard = [];
var shuffledCards = [];


var attempts = 0;
var gamesWon = 0;

var attemptsElement = document.getElementById("attempts");
var gamesWonElement = document.getElementById("gamesWon");
var gameBoard = document.getElementById("game-board");


window.addEventListener('load', function() {

    document.getElementById("btnReset").addEventListener("click",resetBoard);
	
	shuffleCards();
	createBoard();
})

var shuffleCards = function(){

	//Array to hold potential cards
	var potentialCards=[0,1,2,3];

	for(i=0;i<cards.length;i++){

		//Choose a new card randomly
		var index = Math.floor(Math.random()*potentialCards.length);

		//remove the card from the potentialCards array
		var thisCard = potentialCards.splice(index,1);
		shuffledCards.push(thisCard);
	}
	
}


var createBoard = function(){
	
	for(i=0;i<cards.length;i++){

		//Take card from shuffled deck
		var index = shuffledCards.pop();

		//Create new img element
		var cardElement = document.createElement("img");

		//Set card elements
		cardElement.setAttribute("data-id",index);
		//cardElement.setAttribute("src","images/back.png");
		
		//Add event listener to new card
		cardElement.addEventListener("click",flipCard);

		//Deal card to game board
		var newCardElement = gameBoard.appendChild(cardElement);

		//Add to array for easy access later
		cardsOnBoard.push(newCardElement);

	}	

	//Turn cards face down
	cardsFaceDown();
}

var resetBoard = function(){

	//Reset attempts
	attempts = 0;

	//Remove cards from gameBoard
	for(i=0;i<4;i++){
		//get img nodes
		var node = gameBoard.childNodes[0];
		//remove nodes from gameBoard
		gameBoard.removeChild(node);
	}

	//empty cardsOnBoard array
	cardsOnBoard = [];

	//Create a new shuffledCards array
	shuffleCards();

	//Put new cards on to the board
	createBoard();

}

var cardsFaceDown = function(){
	
	for(i=0;i<cards.length;i++){
		//set all cards src to the back image
		cardsOnBoard[i].setAttribute("src","images/back.png");
	}
	
}


var checkForMatch = function(){

	//'this' doesn't seem to point at the clicked card object here.
	//code below works, but this isn't a very sensible place for that line of code.
	//document.getElementsByTagName("img")[cardId].setAttribute("src",cards[cardId].cardImage);

	//if ( cardsInPlay.length === 2 ) {
		
		//Win if both items in cardsInPlay have the same value.
		if ( cardsInPlay[0] === cardsInPlay[1] ) {

			//Alert win
			alert( "You found a match!" );

			//increase game wins
			increaseGameWins();

			//Stop cards from being clicked after game has finished.
			for(i=0;i<4;i++){
				cardsOnBoard[i].removeEventListener("click",flipCard);
			}


		} else {
			//Alert try again
			alert( "Sorry try again!" );

			//Turn cards back over
			cardsFaceDown();
		}

	//}

}

var flipCard = function(){

	//Get clicked cards id
	var cardId = this.getAttribute("data-id");

	//'Flip' card by chaging the card image
	this.setAttribute("src",cards[cardId].cardImage);

	//Add clicked cards rank to cardInPlay array
	cardsInPlay.push(cards[cardId].rank);

	if ( cardsInPlay.length === 2 ) {

		//create a delay so the card flips before alert window pops up.
		setTimeout(function() {

			//Check to see if the cards are the same
			checkForMatch();

			//attempts increase
			increaseAttempts();

			//clear array 
			cardsInPlay = [];

		},50);

	}

	//console.log(cardsInPlay);

	/*console.log( "User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);*/

}

var increaseAttempts = function(){
	attempts++;
	attemptsElement.innerHTML = attempts;
}

var increaseGameWins = function(){
	gamesWon++;
	gamesWonElement.textContent = gamesWon;
}


