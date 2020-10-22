const suit = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */
const cards = [];

/*
HELPER FUNCTIONS. Functions for to keep clean and more manteinable
the main functions in charge of the flow of the application.
 */
function showCards() {
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 33;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// MAIN FUNCTIONS.

function createCards() {
  // Create an array with objects containing the value and the suit of each card
  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: suit[0],
    };
    cards.push(cardObject);
  }
  for (let j = 1; j <= 13; j += 1) {
    const cardObject = {
      value: j,
      suit: suit[1],
    };
    cards.push(cardObject);
  }
  for (let k = 1; k <= 13; k += 1) {
    const cardObject = {
      value: k,
      suit: suit[2],
    };
    cards.push(cardObject);
  }
  for (let l = 1; l <= 13; l += 1) {
    const cardObject = {
      value: l,
      suit: suit[3],
    };
    cards.push(cardObject);
  }
  // Call Helper function showCards()
  showCards();
}
// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  const startButton = document.getElementById('start-game');
  startButton.remove();
  // adding new button shuffle
  const shuffleButton = document.createElement('BUTTON');
  shuffleButton.id = 'shuffle-button';
  shuffleButton.className = 'btn btn-lg btn-secondary';
  const textButton = document.createTextNode('Shuffle');
  shuffleButton.appendChild(textButton);
  document.getElementById('buttons-row').appendChild(shuffleButton);
  // adding new button Flip cards.
  const flipCardsButton = document.createElement('BUTTON');
  flipCardsButton.id = 'flip-button';
  flipCardsButton.className = 'btn btn-lg btn-secondary';
  const textFlipButton = document.createTextNode('Flip cards');
  flipCardsButton.appendChild(textFlipButton);
  document.getElementById('buttons-row').appendChild(flipCardsButton);
}

// Funtion to shuffle the existing deck.
function shuffle() {
  const cardsForShuffle = [...cardsWrapper.children];
  for (let i = cardsForShuffle.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = cardsForShuffle[i];
    cardsForShuffle[i] = cardsForShuffle[j];
    cardsForShuffle[j] = temp;
  }
  while (cardsWrapper.firstChild) {
    cardsWrapper.removeChild(cardsWrapper.lastChild);
  }

  cardsForShuffle.forEach((card, i) => {
    const positionFromLeft = i * 33;
    card.style.left = `${positionFromLeft}px`;
    cardsWrapper.appendChild(card);
  });
}

function flipCards() {
  alert('It is clicking!!!!');
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
  document.getElementById('shuffle-button').addEventListener('click', shuffle);
  document.getElementById('flip-button').addEventListener('click', flipCards);
}

document.getElementById('start-game').addEventListener('click', startGame);
