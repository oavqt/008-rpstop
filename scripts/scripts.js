//
//rpsp
//-user interface
const buttons = document.getElementsByTagName('button');

const buttonsArray = [...buttons];
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
//-compare player/computer choice for x rounds and display game information(wins, loss, tie, overall game result)
