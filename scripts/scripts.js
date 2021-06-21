//
//rpsp
//-user interface
const btns = document.getElementsByClassName('btn__button');

const btnsArray = [...btns];

const header = document.getElementsByClassName('header')[0];

const footer = document.getElementsByClassName('footer__roundmessage')[0];

header.addEventListener('click', function () {
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
    footer.textContent === 'You Won! Paper beats rock!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    footer.innerText === 'You Won! Rock beats scissors!';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    footer.innerText === 'You Won! Scissors beats paper!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    footer.innerText === 'You Lose! Paper beats rock!';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    footer.innerText === 'You Loss! Rock beats scissors!';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    footer.innerText === 'You Loss! Scissors beats paper!';
  } else {
    footer.innerText === 'You Tied';
  }
}

//play
btnsArray.forEach((btns) => {
  btns.addEventListener('click', play);
});

function play() {
  playerSelection = this.value;
  computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);
  playRound(playerSelection, computerSelection);
}
