//rpsp
//-user interface
//-present player with a choice of rps
//receive player choice
// const rock = addEventListener(onclick, );
// const paper = addEventListener('onclick, );
// const scissors = addEventListener('onclick, )
function playerChoice() {
  let choice = prompt('rock, paper, scissors');
  return choice;
}
//store player choice
const playerSelection = playerChoice();

//-generate random computer choice
function getRandomChoice(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function computerPlay() {
  let choice = ['rock', 'paper', 'scissors'];
  return getRandomChoice(choice);
}
//store computer choice
const computerSelection = computerPlay();
//-compare choices
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'win';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    return 'loss';
  } else {
    return 'An error has occured';
  }
}
//compare choices for x rounds
function game(roundNum) {
  let countPlayer = 0;
  let countComputer = 0;
  let roundOutcome = '';
  for (let u = 0; u < roundNum; u++) {
    playRound(playerChoice(), computerPlay());
    if (playRound(playerSelection, computerSelection) === 'win') {
      countPlayer += 1;
      roundOutcome = 'Win';
    } else if (playRound(playerSelection, computerSelection) === 'loss') {
      countComputer -= 1;
      roundOutcome = 'Loss';
    } else if (playRound(playerSelection, computerSelection) === 'tie') {
      roundOutcome = 'Tie';
    } else {
      roundOutcome = 'Error';
    }
    console.log(roundOutcome);
  }
  if (countPlayer > countComputer) {
    console.log('You won!');
  } else if ((countPlayer = countComputer)) {
    console.log('Tied');
  } else {
    console.log('You Loss');
  }
}

game(5);
//reset game
//

// const rock = addEventListener(onclick, );
// const paper = addEventListener('onclick, );
// const scissors = addEventListener('onclick, )
