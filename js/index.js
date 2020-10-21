const suit = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */

function createCards() {
  const cards = [];
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
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 15;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}
// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  const startButton = document.getElementById('start-game');
  startButton.remove();
}
// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
