const getCardsBtn = document.querySelector('#getCardsBtn');
const standBtn = document.querySelector('#standBtn');
const playerCardPlacementDiv = document.querySelector('#playerCardPlacementDiv');
const dealerCardPlacementDiv = document.querySelector('#dealerCardPlacementDiv');
const playerScoreP = document.querySelector('#playerScore');
const dealerScoreP = document.querySelector('#dealerScore');
let playersHand = new Array();
let dealersHand = new Array();
let playerCardCount = 0;
let dealerCardCount = 0;
const player = 0;
const dealer = 1;
getCardsBtn.innerHTML = 'Deal';
standBtn.style.visibility = 'hidden';
let newGame = true;
let cardBackIsDisplayed = false;
const cardBack = document.createElement('img');
cardBack.setAttribute('src', 'cardback.png');

const getNewCards = (numberOfCards, cardPlayer) => {
  const promiseResult = fetch('https://deckofcardsapi.com/api/deck/new/draw/?count='+ numberOfCards)
 
  .then (x => x.json())
  .then (y => {

    if (!promiseResult.state >= 200 && !promiseResult.state <= 299)
    throw new Error('Error when geting cards from server. Error code: ' + promiseResult.state);

    y.cards.forEach(card => {
      displayNewCard(card, cardPlayer);
      switch (cardPlayer) {
      case player : {
          playersHand.push(card);
      break;
      }
      case dealer : {
        dealersHand.push(card);
        break;
      }
      default :
        console.log('Unknown player');
        break;
      }
    });

//    if ((cardPlayer == true) && (cardBackIsDisplayed)) {
//      dealerCardPlacementDiv.removeChild(cardBack);
//      cardBackIsDisplayed = false;
//    }


    switch (cardPlayer) {
      case player : {
        playerCardCount = getCardCount(playersHand);
        playerScoreP.innerHTML = 'Players count ' + playerCardCount;
        break;
      }
      case dealer : {
        dealerCardCount = getCardCount(dealersHand);
        dealerScoreP.innerHTML = 'Dealers count ' + dealerCardCount;
        break;
      }
      default :
        console.log('Unknown player');
        break;
      }

      if (newGame) {
        dealerCardPlacementDiv.appendChild(cardBack);
        cardBackIsDisplayed = true;
        newGame = false;
      }
 
    if (playerCardCount > 21 || dealerCardCount == 21) {
      playerScoreP.innerHTML = 'Player lose! Count ' + playerCardCount;
      getCardsBtn.innerHTML = 'New deal';
      newGame = true;
      standBtn.style.visibility = 'hidden';
      
    } else if (dealerCardCount > 21) {
      playerScoreP.innerHTML = 'You win !!!  Players count ' + playerCardCount;
      getCardsBtn.innerHTML = 'New deal';
      newGame = true;
      standBtn.style.visibility = 'hidden';     
    }

  })
  .catch (error => {
    alert('Somthing whent wrong! Error: ' + error);
  }

)};

function getHandValue (hand) {
  hand.forEach (card => {
    
  });
}
  
function getCardValue (cardValue) {
  console.log('Card värde :'+ cardValue);
  switch (cardValue.trim()) {
    case '1': return 1; 
    case '2': return 2; 
    case '3': return 3; 
    case '4': return 4; 
    case '5': return 5; 
    case '6': return 6; 
    case '7': return 7; 
    case '8': return 8; 
    case '9': return 9; 
    case '10': return 10; 
    case 'JACK': return 10; 
    case 'QUEEN': return 10; 
    case 'KING': return 10; 
    case 'ACE': return 11;
    default: return 0; 
  }
}

function getCardCount (cards) {
  let cardCount = 0;
  let cardValue = 0;
  let aCardIsAce = false;

  console.log(cards);
  cards.forEach((card) => {
    console.log('Inne i forEach...)');
    cardCount += getCardValue(card.value);
    if (getCardValue(card.value) === 11) aCardIsAce = true;
  });

  if (aCardIsAce && (cardCount > 21)) cardCount += -10;
  return cardCount;
}

const startNewGame = () => {
  var child = playerCardPlacementDiv.lastElementChild; 
  while (child) {
    playerCardPlacementDiv.removeChild(child);
    child = playerCardPlacementDiv.lastElementChild;
  }
  child = dealerCardPlacementDiv.lastElementChild; 
  while (child) {
    dealerCardPlacementDiv.removeChild(child);
    child = dealerCardPlacementDiv.lastElementChild;
  }
  playerScoreP.innerHTML = '';
  dealerScoreP.innerHTML = '';
  playersHand = new Array();
  dealersHand = new Array();
  playerCardCount = 0;
  dealerCardCount = 0;

  getNewCards(2, player);
  getNewCards(1, dealer);
  
  getCardsBtn.innerHTML = 'Hit';
}

const displayNewCard = (card, cardPlayer) => {
  let cardImg = document.createElement('img');
  cardImg.setAttribute('src', card.image);
  switch (cardPlayer) {
    case player : {
      playerCardPlacementDiv.appendChild(cardImg);
      break;
    }
    case dealer : {
      dealerCardPlacementDiv.appendChild(cardImg);
      break;
    }
    default : {
      console.log('Unknown player');
      break;
    } 
  }
}
 
getCardsBtn.addEventListener('click', e => {
  if (newGame) {
    startNewGame();
  } else {
    getNewCards(1, player);
  }
  standBtn.style.visibility = 'visible';
});

standBtn.addEventListener('click', e => {
//  while (dealerCardCount < playerCardCount) {
    if (cardBackIsDisplayed) {
      dealerCardPlacementDiv.removeChild(cardBack);
      cardBackIsDisplayed = false;
    }

    getNewCards(1, dealer);
//  }
 
});