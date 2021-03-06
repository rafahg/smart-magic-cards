const suit = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */
const cards = [];
const firstCardSelected = [];
const selectedCards = [];

/*
HELPER FUNCTIONS. Functions for to keep clean and more manteinable
the main functions in charge of the flow of the application.
 */
function showCards() {
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 33;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('onclick', 'selectElement(this)');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.setAttribute('id', `${cardElement.className}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}
// Function for show the selected card in the selected card wrapper.
function showSelectedCard() {
  const positionStyle = 'left';
  selectedCardsWrapper.append(selectedCards[0]);
  const pickedCard = document.getElementById(selectedCards[0].id);
  pickedCard.style = positionStyle;
}

function createMagicButton() {
  const magicButton = document.createElement('Button');
  magicButton.id = 'magic-button';
  magicButton.className = 'btn btn-lg btn-secondary';
  const textMagicButton = document.createTextNode('Magic');
  magicButton.appendChild(textMagicButton);
  document.getElementById('buttons-row').appendChild(magicButton);
}

function selectingTrickDeck() {
  const pickedCard = selectedCards[0].getAttribute('data-value');
  const deckWrapper = [...cardsWrapper.children];
  for (let i = 0; i < deckWrapper.length; i += 1) {
    if (pickedCard === deckWrapper[i].getAttribute('data-value')) {
      selectedCards.push(deckWrapper[i]);
    }
  }
}

function movingCardsTrick() {
  selectedCards.forEach((selectedCard, i) => {
    selectedCard.style = `left: ${i * 33}px`;
    selectedCardsWrapper.append(selectedCard);
  });
}

// Function for select the id of the clicked element on the rendered deck.
/* eslint-disable */
function selectElement(clickedElement) {
  const pickedCard = clickedElement.id;
  if (firstCardSelected.length === 0) {
    firstCardSelected.push(pickedCard);
  }
  console.log(firstCardSelected);
}
/* eslint-enable */

// MAIN FUNCTIONS.

function createCards() {
  // Create an array with objects containing the value and the suit of each card
  for (let i = 0; i < 4; i += 1) {
    for (let j = 1; j <= 13; j += 1) {
      const cardObject = {
        value: j,
        suit: suit[i],
      };
      cards.push(cardObject);
    }
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
  const backDeck = document.getElementById('deck');
  backDeck.classList.toggle('hidden');
}

function magicTrick() {
  selectingTrickDeck();
  movingCardsTrick();
}

function pickingCardAndDoTrick() {
  const selectedCard = document.getElementById(firstCardSelected[0]);
  selectedCards.push(selectedCard);
  document.getElementById(firstCardSelected[0]).remove();
  showSelectedCard();
  createMagicButton();
  document.getElementById('magic-button').addEventListener('click', magicTrick, { once: true });
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
document.getElementById('deck').addEventListener('click', pickingCardAndDoTrick, { once: true });
