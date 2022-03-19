'use strict';

// Selecting elements
let secretNumber = document.querySelector('.game__number');
let message = document.querySelector('.game__message');
let btnCheck = document.querySelector('.btn--check');
let btnRestart = document.querySelector('.btn--restart');
let attempts = document.querySelector('.game__attempts-score');
let highscore = document.querySelector('.game__highscore-score');
let guess = document.getElementById('guess');
let border = document.querySelector('.container');

let counterOfAttempts, currentHighscore, play, randomNumber;

// Convert recurring code into functions
const displayMessage = msg => (message.textContent = msg);
const changeBorder = clr => (border.style.outlineColor = clr);
const secretNumberText = txt => (secretNumber.textContent = txt);
const attemptsText = txt => (attempts.textContent = txt);

// Starting or resetting the game
const startGame = () => {
  play = true;
  counterOfAttempts = 10;
  currentHighscore = Number(highscore.textContent);
  randomNumber = String(Math.trunc(Math.random() * 50 + 1));
  guess.value = '';

  attemptsText(counterOfAttempts);
  secretNumberText('?');
  displayMessage(`Good luck!`);
  changeBorder('rgba(255, 255, 255, 0.3)');
};

// game mechanic
const checkGuess = function () {
  // wrong input
  if (guess.value < 1 || guess.value > 50) {
    displayMessage(`Not a number between 1 and 50!`);
  }
  // guess is the correct secret number
  else if (guess.value === randomNumber) {
    displayMessage(`Correct number!`);
    changeBorder('goldenrod');
    secretNumberText(randomNumber);

    // highscore is better than current highscore
    if (highscore.textContent >= currentHighscore) {
      highscore.textContent = counterOfAttempts;
    }
    // guess is not the secret number and there are attempts left
  } else if (guess.value !== randomNumber && counterOfAttempts > 0) {
    displayMessage(guess.value > randomNumber ? `Too high.` : `Too low.`);
    counterOfAttempts--;
    attemptsText(counterOfAttempts);
    // no attempt left - game over
    if (counterOfAttempts === 0) {
      play = false;
      displayMessage(`You lost. Try again.`);
      changeBorder('red');
    }
  }
};

// Starting, (re)playing the game:
startGame();

// Checking the guess works by clicking on the check button and/or pressing the Enter key.
if (play) {
  btnCheck.addEventListener('click', checkGuess);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') checkGuess();
  });
}

btnRestart.addEventListener('click', startGame);
