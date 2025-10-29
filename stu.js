'use strict';

let computerNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.checkk').addEventListener('click', function () { //body of function button check
  const guess = Number(document.querySelector('.userguess').value);

  // No input
  if (!guess) {
    displayMessage('⛔ Please enter a number!');

  // Correct guess
  } else if (guess === computerNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.computerguess').textContent = computerNumber;

    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.computerguess').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscoree').textContent = '🏅 Highscore: ' + highscore;
    }

  // Wrong guess
  } else if (guess !== computerNumber) {
    if (score > 1) {
      displayMessage(guess > computerNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.scoree').textContent = '💯 Score: ' + score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.scoree').textContent = '💯 Score: 0';
    }
  }
});

// Reset button 
document.querySelector('.reset').addEventListener('click', function () { //function of again button it's body
  score = 20;
  computerNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.scoree').textContent = '💯 Score: ' + score;
  document.querySelector('.computerguess').textContent = '?';
  document.querySelector('.userguess').value = '';

  document.body.style.backgroundColor = '#222';
  document.querySelector('.computerguess').style.width = '15rem';
});
