//
//rpsp
//-user interface
const buttons = document.getElementsByTagName('button');

const buttonsArray = [...buttons];

const header = document.getElementById('header');

header.addEventListener('click', function () {
  if (header.innerText === 'Click Me To Play...') {
    header.innerText = 'Ro-Sham-Bo';
  } else if (header.innerText === 'Ro-Sham-Bo') {
    header.innerText = 'Jan-Ken-Pon';
  } else if (header.innerText === 'Jan-Ken-Pon') {
    header.innerText = 'Rock, Paper, Scissors';
  } else if (header.innerText === 'Rock, Paper, Scissors') {
    header.innerText = 'or the Doge Paw Paw';
  } else {
    header.innerText = 'Stop Clicking Please!';
  }
});

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
  if (playerSelection === computerSelection) {
    console.log('Tie');
  } else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log('Win');
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    console.log('Loss');
  } else {
    console.log('Error');
  }
}
//play
buttonsArray.forEach((button) => {
  button.addEventListener('click', play);
});

function play() {
  playerSelection = this.value;
  computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);
  playRound(playerSelection, computerSelection);
}
