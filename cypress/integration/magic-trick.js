const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
const sortedCardsClasses = [];
let selectedCards; /* eslint-disable-line */
suits.forEach((suit) => [...Array(13)].forEach((_, i) => sortedCardsClasses.push(`${suit}-${i + 1}`)));
// let selectedCard;
describe('Play game', () => {
  it('Visits the game and play', () => {
    cy.visit('./index.html');
    cy.get('.navbar-brand img').should('have.exist');
    cy.get('.navbar-brand').should('have.attr', 'href').and('eq', 'https://www.smartpension.co.uk');
    cy.get('h1').should('have.text', 'Become a software engineer at Smart');
    cy.get('h3').should('have.text', 'Join Smart by simply performing a magic trick');
    cy.get('#description').should('exist');
    cy.get('#start-game').should('have.text', "Let's get started").click();
    cy.get('[class*="hearts-"]').should('have.length', 13);

    cy.get('#start-game').should('have.not.exist');

    // /* Each suit is rendered with 13 cards each (hearts, spades, diamonds, clubs) */
    suits.forEach((suit) => {
      cy.get(`[class*="${suit}-"]`).should('have.length', 13);
    });

    // /* The cards are sorted and grouped by suit (hearts, spades, diamonds, clubs) */
    cy.get('.card').then((cards) => {
      const allCardClasses = [...cards].map((card) => card.classList[1]);
      expect(allCardClasses).to.deep.equal(sortedCardsClasses);
    });

    // /* Click the `Suffle` button */
    cy.contains('Shuffle').click();

    /* The cards are not sorted anymore (shuffled) */
    cy.get('.card').then((cards) => {
      const allCardClasses = [...cards].map((card) => card.classList[1]);
      expect(allCardClasses).to.not.deep.equal(sortedCardsClasses);
    });

    // Button Show/Hide is created

    cy.contains('Flip cards');

    // /* Click the `Flip cards` button */
    cy.contains('Flip cards').click();

    // /* The cards are now flipped */
    cy.get('.cards-wrapper').should('have.class', 'hidden');

    // /* Click the `Flip cards` button */
    cy.contains('Flip cards').click();

    // /* The cards are now flipped to be visible again */
    cy.get('.cards-wrapper').should('not.have.class', 'hidden');

    cy.get('.selected-card-wrapper .card').should('not.exist');
    cy.contains('Magic').should('not.exist');

    // /* Click on the first card */
    cy.get('.card').then((cards) => {
      selectedCards = cards;
      selectedCards[0].click();
    });

    // /* The selected card moved to the `selected-card-wrapper` */
    cy.get('.selected-card-wrapper .card').then((cards) => {
      expect(cards).to.have.length(1);
      expect(cards[0]).to.equal(selectedCards[0]);
    });

    // /* Click on the `Magic` button */
    cy.contains('Magic').click();

    // /* All the related cards have been removed from the deck */
    cy.get('.cards-wrapper .card').then((cards) => {
      const allCardValues = [...cards].map((card) => card.getAttribute('id'));
      expect(allCardValues).to.have.length(48);
      // expect(allCardValues).to.not.include(card.getAttribute('id'));
    });

    // /* The removed cards are desplayed in the `selected-card-wrapper` */
    cy.get('.selected-card-wrapper .card').then((cards) => {
      const allCardValues = [...cards].map((selectedCard) => selectedCard.getAttribute('data-value'));
      // const selectedValue = selectedCard.getAttribute('data-value');
      expect(allCardValues).to.have.length(4);
      expect(allCardValues).to.deep.equal([allCardValues[0], allCardValues[1], allCardValues[2], allCardValues[3]]);
    });
  });
});
