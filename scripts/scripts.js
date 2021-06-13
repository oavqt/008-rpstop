//rpsp
//-user interface
//-generate player choice using some kind input from user
let playerSelection = '';

function playerPlay() {
  playerSelection = prompt('rock, paper, scissors');
}
//-generate random computer choice
let computerSelection = '';

function getRandomChoice(list) {
  return list[Math.floor(Math.random() * list.length)];
}
function computerPlay() {
  computerSelection = getRandomChoice(['rock', 'paper', 'scissors']);
}
//-compare player/computer choice and return a value depending on outcome
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie';
  } else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'Win';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    return 'Loss';
  } else {
    return 'Error';
  }
}
//-compare player/computer choice for x rounds and display game information(wins, loss, tie, overall game result)
function game() {
  let countPlayer = 0;
  let countComputer = 0;
  let roundOutcome = '';
  while (countPlayer < 5 && countComputer < 5) {
    playRound(playerPlay(), computerPlay());
    if (playRound(playerSelection, computerSelection) === 'Win') {
      countPlayer += 1;
      roundOutcome = 'Win';
    } else if (playRound(playerSelection, computerSelection) === 'Loss') {
      countComputer += 1;
      roundOutcome = 'Loss';
    } else if (playRound(playerSelection, computerSelection) === 'Tie') {
      roundOutcome = 'Tie';
    } else {
      roundOutcome = 'Error';
    }
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(roundOutcome);
    console.log(countPlayer);
    console.log(countComputer);
  }
  if (countPlayer = countComputer) {
    console.log('Tied!');
  } else if (countPlayer > countComputer) {
    console.log('You won!');
  } else {
    console.log('You Loss!');
  }
}
game();
//reset game
//
