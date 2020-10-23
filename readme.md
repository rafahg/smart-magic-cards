# Smart Magic Cards Tech-test.

This a tech test for SmartPensions. 

## 1.SETUP

For setting up this project in your local system:

1. Clone the repository
```
$ git clone git@github.com:rafahg/tech-test-FrontEnd.git
```
2. Install Yarn 
 In mac Os as an example
```
$ brew install yarn 
``` 
For a more detailed explanation you can follow the Yarn docs:

[Yarn Docs](https://classic.yarnpkg.com/en/docs/install#debian-stable)

3. Develop
As this is just a static application, opening the `index.html` page in the browser should show you the app.<br>
In order to use the SASS compiler, run the following command.
```
$ yarn develop
```
4. Testing

In order to run the tests, run one of the following commands.
```
$ yarn test       # Test once
$ yarn serve-test # Open and serve the tests
```
_Note:_ [Cypress.io](https://www.cypress.io/) is included in the project and all tests will run with Github Actions.

<br>
<br>

#### Example
<img src="assets/working-example.gif" alt="working-example">

<br>
<br>


## 2.GENERAL APPROACH TO THE SOLUTION.

 The challenge has been made following this principles:
  
  - Getting first a MVP based on the requirements.
  - Implement as many as Bonus points requirements possible.
  - Testing the MVP as a fundamental requirement, following a TDD approach.
  - Strict version control methodology.


 <strong>The MVP and the fully tested code is the main branch. The code which run in the Final Functionality link is in the devSpace-paragraphs branch.</strong>
  I have not merged that branch because is not covered by test in its last implementations and needs to be  reviewed.
  
  You can see my final implementation, on a functionality level here:

  [FINAL FUNCTIONALITY](https://rafahg.github.io/tech-test-FrontEnd/)
---
  For a detailed technical approach of my solution, you can follow my process here:

  [CHALLENGE APPROACH](https://github.com/rafahg/tech-test-FrontEnd/blob/main/process_readme.md)
---
<br>
<br>




  # Requirements of the Challenge
- Make sure all 4 suits of cards are rendered and sorted by suit. There are 13 cards in each suit ( ♥, ♣, ♦, ♠ ).
- Make sure the value for each card is visible on the initial render, basically move each card a bit so the card is readable.
- Add 3 buttons to the flow that will allow you to do 3 actions:
  - **Shuffle:** Randomly shuffles all cards.
  - **Flip cards:** Turn all the cards face down by adding a class (CSS is already included).
  - **Magic:** Remove all related cards from the deck after picking a card. (Only display this button after a card has been picked).
- Create the functionality to pick a card, by clicking on a random card.
- When the trick is performed (by clicking the magic button), move the related cards to the picked card.

<br>
<br>

#### Bonus points
  - Find a way to remove duplications in the `cards.scss` file and generate all the classes automatically for the cards: `.hearts-1`, `.hearts-2`, ... , `.spades-13`.
  - Add animation.
  - Do not use images for the cards, style them with CSS/SCSS only.
  - Uncomment the tests in the `cypress/integration/magic-trick.js` file and **make sure the tests pass**.
  - Add additional tests (we like test coverage).
  - Usage of drag and drop to pick a card.
  - Having a way of resetting the app, without reloading the page.
  - Do not break any linting rules. (The linter runs before tests)
  - Add some extra functionality, this is your chance to be creative. 😉
