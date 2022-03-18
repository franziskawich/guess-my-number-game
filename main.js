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

const startGame = function () {
  play = true;
  counterOfAttempts = 10;
  attempts.textContent = counterOfAttempts;
  currentHighscore = Number(highscore.textContent);
  randomNumber = String(Math.trunc(Math.random() * 50 + 1));
  secretNumber.textContent = '?';
  guess.value = '';
  message.textContent = `Good luck!`;
};

startGame();

if (play) {
  btnCheck.addEventListener('click', function () {
    // wrong input
    if (guess.value < 1 || guess.value > 50) {
      message.textContent = `Enter a number between 1 and 50.`;
      message.style.color = 'goldenrod';
    }
    // guess is the correct secret number
    else if (guess.value === randomNumber) {
      message.textContent = `Correct number!`;
      secretNumber.textContent = randomNumber;

      // highscore is better than last game
      if (highscore.textContent >= currentHighscore) {
        highscore.textContent = counterOfAttempts;
      }
      // guess is not the secret number and there are attempts left
    } else if (guess.value !== randomNumber && counterOfAttempts > 0) {
      message.textContent =
        guess.value > randomNumber ? `Too high.` : `Too low.`;
      counterOfAttempts--;
      attempts.textContent = counterOfAttempts;
      // no attempts left - game over
      if (counterOfAttempts === 0) {
        play = false;
        message.textContent = `You lost. Try again.`;
        border.style.outlineColor = 'red';
      }
    }
  });
}

btnRestart.addEventListener('click', startGame);
