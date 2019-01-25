console.log("I am here")
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
    cardElement.setAttribute("data-id", i);
      // Add event listener and call flipCard function
      // syntax jogger button.addEventListener('click', alertUser);
    cardElement.addEventListener("click", flipCard);
     /* Append card element as last part of for loop
     document.getElementById('special') */
    document.getElementById("game-board").appendChild(cardElement);
}



var checkForMatch = function() {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank)
      
      {alert("You found a match");

     } else {
  
    alert("Sorry,try again.");
    }   

// Remove cardID param
// Create new var cardId get this.dataId
// Before if statement set this.img
var flipCard = function () {
    
         var cardId =  this.getAttribute("data-id", i);
         cardsInPlay.push(cards[cardId].rank);
         this.setAttribute("src", cards[cardId].cardImage);
    
    if (cardsInPlay.length === 2) 
       {checkForMatch();  


        console.log("User flipped" + " " + cards[cardId].rank);
        console.log("User flipped" + " " + cards[cardId].suit);
        console.log("User flipped" + " " + cards[cardId].cardImage);
    }
};
    createBoard()