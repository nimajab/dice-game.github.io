// 'use strict';

// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const current0El = document.querySelector('#current--0');
// const current1El = document.querySelector('#current--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnhold = document.querySelector('.btn--hold');

// let currentScore = 0;
// let activePlayer = 0;
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// btnRoll.addEventListener('click', function () {
//   const dice = Math.trunc(Math.random() * 6 + 1);
//   console.log(dice);
//   diceEl.classList.remove('hidden');
//   diceEl.src = `dice-${dice}.png`;

//   if (dice !== 1) {
//     currentScore += dice;
//     // current0El.textContent = currentScore *****
//     document.getElementById(`current--${activePlayer}`).textContent =currentScore;
//   } else {
//     currentScore = 0;
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     // if(activePlayer===0){*****
//     //   activePlayer = 1 ;
//     // }else {
//     // activePlayer = 0
//     // }*****
//     player0El.classList.toggle(`player--active`);
//     player1El.classList.toggle(`player--active`);

//   }
// });

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let score , currentScore , activePlayer , playing


const init = function () {
 scores = [0, 0];
 currentScore = 0;
 activePlayer = 0;
 playing = true;
  
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  
  diceEl.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};

init()

const switchplayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

btnRoll.addEventListener(`click`, function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore = currentScore + dice;
      // current0El.textContent = currentScore
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // currentScore = 0
    } else {
      switchplayer();
    }
  }
});

btnhold.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      switchplayer();
    }
  }
});

// btnNew.init(`click`, function () {});
btnNew.addEventListener(`click`, init)


// the end