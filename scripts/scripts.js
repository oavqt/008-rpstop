//
//rpsp

//-user interface

const btns = document.getElementsByClassName('btn__buttons');

const btnsArray = [...btns];

function rotatingHeader() {
  let words = [
    ' Ro-Sham-Bo',
    ' Jan-Ken-Pon',
    ' Rock, Paper, Scissors',
    ' the Doge Paw Paw Paw',
  ];
  let wrotation = document.getElementsByClassName('header')[0];
  let trotation = document.getElementsByClassName('title')[0];
  let currentWord = '';
  let newWord = getRandomChoice(words);
  while (newWord === currentWord) {
    newWord = getRandomChoice(words);
  }
  wrotation.textContent = newWord;
  trotation.textContent = newWord;
}

window.addEventListener('load', rotatingHeader);

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
  let footer = document.getElementsByClassName('footer__roundmessage')[0];
  let scoreColor = document.getElementsByClassName('score')[0];
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    footer.textContent = 'You Won! Paper beats rock!';
    scoreColor.setAttribute('style', 'background-color: #29DB91');
    playerCount += 1;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    footer.textContent = 'You Won! Rock beats scissors!';
    scoreColor.setAttribute('style', 'background-color: #29DB91');
    playerCount += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    footer.textContent = 'You Won! Scissors beats paper!';
    scoreColor.setAttribute('style', 'background-color: #29DB91');
    playerCount += 1;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    footer.textContent = 'You Lose! Paper beats rock!';
    scoreColor.setAttribute('style', 'background-color: #db2b39');
    computerCount += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    footer.textContent = 'You Loss! Rock beats scissors!';
    scoreColor.setAttribute('style', 'background-color: #db2b39');
    computerCount += 1;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    footer.textContent = 'You Loss! Scissors beats paper!';
    scoreColor.setAttribute('style', 'background-color: #db2b39');
    computerCount += 1;
  } else {
    footer.textContent = 'You Tied';
    scoreColor.setAttribute('style', 'background-color: #29AEDB');
    tieCount += 1;
  }
}

//count score and display it to user
let playerCount = 0;
let computerCount = 0;
let tieCount = 0;

function currentScore() {
  let score = document.getElementsByClassName('score')[0];
  let endgame = document.getElementsByClassName('container')[0];
  let endgamescreen = document.getElementsByClassName('endgame')[0];
  let endmessage = document.getElementsByClassName('endgame__message')[0];
  score.textContent = `W : ${playerCount}   |   T : ${tieCount}   |   L : ${computerCount}`;
  if (playerCount >= 12 || computerCount >= 12) {
    btnsArray.forEach((btns) => {
      btns.disabled = true;
    });
    if (playerCount > computerCount) {
      endgame.setAttribute('style', 'display: none');
      endgamescreen.setAttribute('style', 'display: flex');
      endmessage.textContent = 'Congradulations, You Won.';
    } else {
      endgame.setAttribute('style', 'display: none');
      endgamescreen.setAttribute('style', 'display: flex');
      endmessage.textContent = 'Congradulations, You Lost.';
    }
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
//
