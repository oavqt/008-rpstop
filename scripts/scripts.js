//
//rpsp

//-user interface

const btns = document.getElementsByClassName('btn__buttons');

const btnsArray = [...btns];

const header = document.getElementsByClassName('header')[0];

const footer = document.getElementsByClassName('footer__roundmessage')[0];

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
//display computer choice

function displayChoice() {
  let rock = document.getElementsByClassName(
    'imgcontainer__computer__img-rock'
  )[0];
  let paper = document.getElementsByClassName(
    'imgcontainer__computer__img-paper'
  )[0];
  let scissors = document.getElementsByClassName(
    'imgcontainer__computer__img-scissors'
  )[0];
  console.log(computerSelection);
  if (computerSelection === 'rock') {
    rock.setAttribute('style', 'display: block');
    paper.setAttribute('style', 'display: none');
    scissors.setAttribute('style', 'display: none');
  } else if (computerSelection === 'paper') {
    paper.setAttribute('style', 'display: block');
    scissors.setAttribute('style', 'display: none');
    rock.setAttribute('style', 'display: none');
  } else if (computerSelection === 'scissors') {
    scissors.setAttribute('style', 'display: block');
    rock.setAttribute('style', 'display: none');
    paper.setAttribute('style', 'display: none');
  }
}

//-compare player/computer choice and return/display a value depending on outcome

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
  if (playerCount >= 5 || computerCount >= 5) {
    btnsArray.forEach((btns) => {
      btns.disabled = true;
    });
  }
}

//play
btnsArray.forEach((btns) => {
  btns.addEventListener('click', runGame);
});

function runGame() {
  playerSelection = this.value;
  computerPlay();
  displayChoice();
  playRound(playerSelection, computerSelection);
  currentScore();
}
