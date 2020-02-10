let playerScore = 0
let computerScore = 0

const rock = document.querySelector('#rock');
rock.onclick = () => playRound('rock', computerPlay());

const paper = document.querySelector('#paper');
paper.onclick = () => playRound('paper', computerPlay());

const scissors = document.querySelector('#scissors');
scissors.onclick = () => playRound('scissors', computerPlay());

function computerPlay() {
  let choice = ["rock" , "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  var outcome
  if (playerSelection.toLowerCase() === computerSelection) {
  outcome = "It's a draw!";
  }
  else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
  outcome = `${playerSelection} beats ${computerSelection}, you win!`;
  playerScore++;
  }
  else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
  outcome = `${playerSelection} beats ${computerSelection}, you win!`;
  playerScore++;
  }
  else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
  outcome = `${playerSelection} beats ${computerSelection}, you win!`;
  playerScore++;
  }
  else {
  outcome = `${computerSelection} beats ${playerSelection}, you lose!`;
  computerScore++;
  }
const results = document.querySelector('#results');

results.classList.add('content');
results.textContent = outcome;

const playScore = document.querySelector('#playScore');
playScore.textContent = playerScore;

const compScore = document.querySelector('#compScore');
compScore.textContent = computerScore;

if (playerScore > computerScore && playerScore === 5) { // check if player wins
  const playerWins = document.querySelector('#playerWins');
  playerWins.textContent = '*****WINNNER*****';

  // show player win and reset scores
  playerScore = 0;
  computerScore = 0;
  } else if (computerScore > playerScore && computerScore === 5) { // check if computer wins
  const computerWins = document.querySelector('#computerWins')
  computerWins.textContent = '*****WINNNER*****';

  // show computer wins and reset scores
  playerScore = 0;
  computerScore = 0;
  } else {
    computerWins.textContent = '';
    playerWins.textContent = '';
  }
}