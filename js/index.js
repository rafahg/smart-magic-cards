const suit = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */
const cards = [];
const firstCardSelected = [];
const selectedCards = [];

/*
HELPER FUNCTIONS.
 */

/* HELPER MESSAGE FUNCTIONS */

function startMessage() {
  document.getElementById('description').innerHTML = 'Hello Magician!, now Shuffle and Flip the deck!!';
  
}

function selectCardMessage() {
  document.getElementById('description').innerHTML = 'Well done!!, Now you can pick a card from the deck!!!';
}

function doTrickMessage() {
  document.getElementById('description').innerHTML = 'Nice!, so We are ready for trick. Click the Magic button please! And flip again to check I am real magician!!!!';
}

function trickDoneMessage() {
  document.getElementById('description').innerHTML = 'TAAACHAN!!!. That was nice!, But, for real Magic, click that new button there.';
}


function realMagic() {
  const realMagicButton = document.createElement('BUTTON');
  realMagicButton.id = 'real-magic';
  realMagicButton.className = 'btn btn-lg btn-secondary';
  realMagicButton.setAttribute('onclick', "window.location.href='./index1.html'");
  const textRealMagicButton = document.createTextNode('Real Magic!');
  realMagicButton.appendChild(textRealMagicButton);
  document.getElementById('buttons-row').appendChild(realMagicButton);

}
function showCards() {
  cards.forEach((card, i) => {
    const positionFromLeft = (1.5 + i) * 33;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('onclick', 'selectElement(this)');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.setAttribute('id', `${cardElement.className}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}
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

function createShuffle() {
  const shuffleButton = document.createElement('BUTTON');
  shuffleButton.id = 'shuffle-button';
  shuffleButton.className = 'btn btn-lg btn-secondary';
  const textButton = document.createTextNode('Shuffle');
  shuffleButton.appendChild(textButton);
  document.getElementById('buttons-row').appendChild(shuffleButton);
}

function createFlip() {
  const flipCardsButton = document.createElement('BUTTON');
  flipCardsButton.id = 'flip-button';
  flipCardsButton.className = 'btn btn-lg btn-secondary';
  const textFlipButton = document.createTextNode('Flip cards');
  flipCardsButton.appendChild(textFlipButton);
  document.getElementById('buttons-row').appendChild(flipCardsButton);
}

/* eslint-disable */
function selectElement(clickedElement) {
  const pickedCard = clickedElement.id;
  if (firstCardSelected.length === 0) {
    firstCardSelected.push(pickedCard);
  }
}
/* eslint-enable */

// MAIN FUNCTIONS.

function createCards() {
  for (let i = 0; i < 4; i += 1) {
    for (let j = 1; j <= 13; j += 1) {
      const cardObject = {
        value: j,
        suit: suit[i],
      };
      cards.push(cardObject);
    }
  }
  showCards();
}

function createButtons() {
  const startButton = document.getElementById('start-game');
  startButton.remove();
  createShuffle();
  createFlip();
}

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
    const positionFromLeft = (1.5 + i) * 33;
    card.style.left = `${positionFromLeft}px`;
    cardsWrapper.appendChild(card);
  });
  selectCardMessage()
}

function flipCards() {
  const backDeck = document.getElementById('deck');
  backDeck.classList.toggle('hidden');
}

function magicTrick() {
  selectingTrickDeck();
  movingCardsTrick();
  realMagic();
}

function pickingCardAndDoTrick() {
  const selectedCard = document.getElementById(firstCardSelected[0]);
  selectedCards.push(selectedCard);
  document.getElementById(firstCardSelected[0]).remove();
  showSelectedCard();
  createMagicButton();
  doTrickMessage();
  document.getElementById('magic-button').addEventListener('click', magicTrick, { once: true });
  document.getElementById('magic-button').addEventListener('click', trickDoneMessage, { once: true })
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  startMessage();
  createButtons();
  createCards();
  document.getElementById('shuffle-button').addEventListener('click', shuffle);
  document.getElementById('flip-button').addEventListener('click', flipCards);
  document.getElementById('flip-button').addEventListener('click', selectCardMessage, { once : true });
}

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('deck').addEventListener('click', pickingCardAndDoTrick, { once: true });
