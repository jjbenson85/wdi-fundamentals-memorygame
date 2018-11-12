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

var checkForMatch = function(){
	if ( cardsInPlay.length === 2 ) {
		if ( cardsInPlay[0] === cardsInPlay[1] ) {
			alert( "You found a match!" );
		} else {
			alert( "Sorry try again!" );
		}

	}
}

var flipCard = function(cardId){
	/*var cardOne = cards[0];
	var cardTwo = cards[1];

	cardsInPlay.push( cardOne );
	cardsInPlay.push( cardTwo );

	console.log( "User flipped "+ cardOne );
	console.log( "User flipped "+ cardTwo );*/

	console.log( "User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	cardsInPlay.push( cards[cardId].rank);

	checkForMatch();
	

}

flipCard(0);
flipCard(2);
