//
//rpsp

//-user interface

const btns = document.getElementsByClassName('btn__button');

const btnsArray = [...btns];

const header = document.getElementsByClassName('header')[0];

const footer = document.getElementsByClassName('footer__roundmessage')[0];

const img = document.getElementsByClassName('btn__img');

const imgs = [...img];

header.addEventListener('click', function (e) {
  console.log(e);
  setInterval(ol, 5000);
});
function ol() {
  if (header.textContent === 'Do Not Click Me!') {
    header.textContent = "Okay, Let's Play Ro-Sham-Bo, or";
  } else if (header.textContent === "Okay, Let's Play Ro-Sham-Bo, or") {
    header.textContent = 'Jan-Ken-Pon, or';
  } else if (header.textContent === 'Jan-Ken-Pon, or') {
    header.textContent = 'Rock, Paper, Scissors, or';
  } else if (header.textContent === 'Rock, Paper, Scissors, or') {
    header.textContent = 'the Doge Paw Paw Paw';
  } else {
    header.textContent = 'Okay, You Can Stop Now!...';
  }
}

//-generate player choice

let playerSelection;

//-generate random computer choice

let computerSelection;
function getRandomChoice(list) {
  return list[Math.floor(Math.random() * list.length)];
}
function computerPlay() {
  computerSelection = getRandomChoice(['rock', 'paper', 'scissors']);
}

//-compare player/computer choice and return a value depending on outcome

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    footer.textContent = 'You Won! Paper beats rock!';
    playerCount += 1;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    footer.textContent = 'You Won! Rock beats scissors!';
    playerCount += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    footer.textContent = 'You Won! Scissors beats paper!';
    playerCount += 1;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    footer.textContent = 'You Lose! Paper beats rock!';
    computerCount += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    footer.textContent = 'You Loss! Rock beats scissors!';
    computerCount += 1;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    footer.textContent = 'You Loss! Scissors beats paper!';
    computerCount += 1;
  } else {
    footer.textContent = 'You Tied';
  }
}

//count score and display it to user
let playerCount = 0;
let computerCount = 0;

function currentScore() {
  document.getElementsByClassName(
    'score'
  )[0].textContent = `You ${playerCount} | ${computerCount} Doge`;
}

//play
btnsArray.forEach((btns) => {
  btns.addEventListener('click', runGame);
});

function runGame() {
  playerSelection = this.value;
  computerPlay();
  playRound(playerSelection, computerSelection);
  currentScore();
}

// function removeHighlight(e) {
//   if (this.classList === 'btn__button-highlight') {
//     this.classList.remove('btn__button-highlight');
//     console.log(this.classList);
//   } else {
//     this.classList.add('btn__button-highlight');
//   }
// }

// btnsArray.forEach((btns) => {
//   btns.addEventListener('click', removeHighlight);
// });
