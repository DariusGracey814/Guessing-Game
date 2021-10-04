'use strict';
console.log('Javascript Connection Successful');


const guessMessage = function(element) {
    const message =  document.querySelectorAll('.message');
    message.forEach((i) => {
        i.textContent = element;
    });
}

const userScore = function (uScore) {
    document.querySelector('.score').textContent = uScore;
}

const secretNum = function(number) {
    document.querySelector('.num').textContent = number;
}


let secretNumber = Math.trunc(Math.random() * 30) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        guessMessage('⛔️ Enter a Number');
    }else if (guess < 0 || guess > 30) {
        guessMessage('Enter a Number 1 - 30');
    }else if (guess === secretNumber) {
        guessMessage('🎉 Congratulations You win');
        document.querySelector('.num').textContent = secretNumber;
        const userWin = document.querySelectorAll('.gameContent');
        userWin.forEach((i) => {
            i.style.backgroundColor = '#60b347';  
        })
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.number').style.width = '10.6rem'
    }else if (guess !== secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = guess < secretNumber ? '📉 Too Low' : '📈 Too High';
            score--;
            userScore(score);
        }else {
            guessMessage('You Lose ❗️');
        }
    }else {
        guessMessage('Enter valid Number');
    }
   
});

document.querySelector('.reset').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    guessMessage('Start Guessing...');
    const userWin = document.querySelectorAll('.gameContent');
        userWin.forEach((i) => {
            i.style.backgroundColor = '#388';  
        })
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '10.6rem';
    userScore(score);
    secretNum('?');
});



