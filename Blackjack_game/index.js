
let cards = [];
let sum = 0;
let hasblackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
console.log(messageEl.textContent);
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player={
    name:"per",
    chips:145
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips;
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1;
    if(randomNumber>10){
        return 10;
    }
    else if (randomNumber==11 || Math.floor(Math.random()*13)+1==13){
        return 11;
    }
    else{
    return randomNumber } 
}

function startGame() {
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards[firstCard,secondCard];
    sum=firstCard+secondCard;
    
  renderGame();
}

function renderGame() {
  cardEl.textContent = "cards: "
  for(let i=0;i<cards.length;i++){
    cardEl.textContent=cardEl.textContent+cards[i]+" ";
  }
  sumEl.textContent = "sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card";
  } else if (sum === 21) {
    message = " you've got blackjack!";
    hasblackjack = true;
  } else {
    message = "you're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}


function newCard() {
    if (isAlive==true && hasblackjack==false) {
    let card = getRandomCard()
    sum = sum + card;
    cards.push(card);
    renderGame();
}
}


