// Make game interactive - final
var cards = [
{   rank: "queen",
    suit: "hearts",
    cardImage: "MemoryGameImages/queen-of-hearts.png"
},

{   rank: "queen",
    suit: "diamonds",
    cardImage: "MemoryGameImages/queen-of-diamonds.png"
},  
    
{   rank: "king",
    suit: "hearts",
    cardImage: "MemoryGameImages/king-of-hearts.png"
},  

{   rank: "king",
    suit: "diamonds",
    cardImage: "MemoryGameImages/king-of-diamonds.png"
}
];

var cardsInPlay =[];

// declare createBoard function
 var createBoard = function () {
//run for loop
    for (var i = 0; i < cards.length; i ++) {
        // still in the loop for each card create new image element
    var cardElement = document.createElement('img');
       // add src attribute as back of card 
    cardElement.setAttribute("src", "MemoryGameImages/back.png");
       // add data-id attribute as i no punctuation
    cardElement.setAttribute(data-id, i);
      // Add event listener and call flipCard function
      // syntax jogger button.addEventListener('click', alertUser);
    cardElement.addEventListener("click", flipCard);
     /* Append card element as last part of for loop
     document.getElementById('special') */
    document.getElementById("game-board")[0].appendChild(cardElement);
}
};


var checkForMatch = function() {
    cardsInPlay[0].rank === cardsInPlay[1].rank?
    alert("You found a match"):
    alert("Sorry,try again.");
    }   

// Remove cardID param
// Create new var cardId get this.dataId
// Before if statement set this.img



var flipCard = function () {
    
         var cardId =  this.getAttribute(data-id, i);
         cardsInPlay.push(cards[cardId].rank);
         this.setAttribute("src", cards[cardId].cardImage);
    
    if (cardsInPlay.length === 2); 
       {checkForMatch();  


        console.log("User flipped" + " " + cards[cardId].rank);
        console.log("User flipped" + " " + cards[cardId].suit);
        console.log("User flipped" + " " + cards[cardId].cardImage);
    }
};
    createBoard();

//Remove flipcard add createBoard
/* this memory jog
document.querySelector('.circle').addEventListener('click', turnRed)

var turnRed = function () {
    this.style.backgroundColor = "red";
}; */

/* PROJECT OBJECTS - code running ok up to here

var cards = [
{   rank: "queen",
    suit: "hearts",
    cardImage: "MemoryGameImages/queen-of-hearts.png"
},

{   rank: "queen",
    suit: "diamonds",
    cardImage: "MemoryGameImages/queen-of-diamonds.png"
},  
    
{   rank: "king",
    suit: "hearts",
    cardImage: "MemoryGameImages/king-of-hearts.png"
},  

{   rank: "king",
    suit: "diamonds",
    cardImage: "MemoryGameImages/king-of-diamonds.png"
}
];

var cardsInPlay =[];

var checkForMatch = function() {
    cardsInPlay[0].rank === cardsInPlay[1].rank?
    alert("You found a match"):
    alert("Sorry,try again.");
    }

var flipCard = function(cardId) {
    cardsInPlay.push(cards[cardId].rank);
    
    if (cardsInPlay.length === 2); 
       {checkForMatch();
        
        console.log("User flipped" + " " + cards[cardId].rank);
        console.log("User flipped" + " " + cards[cardId].suit);
        console.log("User flipped" + " " + cards[cardId].cardImage);
    }
};

*/

/*PROJECT - FUNCTIONS
console.log ("Memory Game js up and running")

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay =[];

var checkForMatch = function () {
    cardsInPlay[0] === cardsInPlay[2] ||
    cardsInPlay[1] === cardsInPlay[3] ?
    alert("You found a match"):
    alert("Sorry,try again.");
    };

//NOTE: we'll want to make sure to call the flipCard after it has already been defined
//or we will get an error - not sure what this means and getting an error

var flipCard = function (cardId) {
    If (cardsInPlay.length === 2); 
    checkForMatch();
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped" + cards[cardId]);
    };

// Flipcard function steps
// What are the cards IDs
// Log the cards in play by ID
// Are there 2 cards in play 
// Simple if statement - check for match &
// Log which card the player flipped

// checkForMatch function steps
// Has player flipped 2 cards
// Which 2 cards are in play?
// Has the player found a match
// Alert player of result

*/

/*PROJECT - Control Flow

// Operators && || === can all be used in one line
// Comparison operators <= / >=  +=/-= 
// If  (chance of rain >=50%) 
//     {wear a raincoat
// }else{ otherwise wear a cardigan
//}; 


// If else control flow
// cards 0 && 2 are a match and cards 1&& 3
// other cards are not
// card 0 & 2 message you have a match is the alert
// test by changing the cards in play numbers

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay =[];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped" + " " + cardOne)

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardTwo)

// are cards in play equal to 2 cards?

if (cardsInPlay.length === 2 
    && cards[0] === cards[2] 
    || cards [1] === cards [3]) 
    { alert("You have a match");
} else {
  alert("Sorry, try again")
};

*/

/* Project - Variables

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped" + " " + cardOne)
console.log("User flipped" + " " + cardThree)
*/