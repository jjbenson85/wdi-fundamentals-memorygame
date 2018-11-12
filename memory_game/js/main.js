//MAIN ARRAY
var cards = [ "queen", "queen", "king", "king" ];
var cardsInPlay = [];

var flipCard = function(cardId){
	/*var cardOne = cards[0];
	var cardTwo = cards[1];

	cardsInPlay.push( cardOne );
	cardsInPlay.push( cardTwo );

	console.log( "User flipped "+ cardOne );
	console.log( "User flipped "+ cardTwo );*/

	console.log( "User flipped " + cards[cardId]);
	cardsInPlay.push( cards[cardId] );

	if ( cardsInPlay.length === 2 ) {
		if ( cardsInPlay[0] === cardsInPlay[1] ) {
			alert( "You found a match!" );
		} else {
			alert( "Sorry try again!" );
		}

	}

}

flipCard(0);
flipCard(2);
