'use strict';
const getSecretNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;
const scoreElement = document.querySelector('.score');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function () {
  if (score !== 1) {
    score--;
    scoreElement.textContent = score;
  } else {
    displayMessage('Game over');
    scoreElement.textContent = 0;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ no number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too low');
    updateScore();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getSecretNumber();
  score = 20;
  displayMessage('Start guessing...');
  scoreElement.textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
