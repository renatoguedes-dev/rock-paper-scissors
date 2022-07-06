// Global variables used in the code

// set player's score to start at zero
let playerScore = 0;

// set computer's score to start at zero
let computerScore = 0;

// function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  
  result = Math.floor(Math.random() * 3);

  // convert the result number to words
  if (result == 0) {
    return "Rock";
  } else if (result == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}


// Single round function. It adds a score to the winner of round, do nothing 
// if it's a tie  
function playRound(playerSelection, computerSelection) {

  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  }  else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lose! Scissors beats paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "rock" && computerSelection == "rock" || 
    playerSelection == "paper" && computerSelection == "paper" || 
    playerSelection == "scissors" && computerSelection == "scissors") {
    return "Tie!";
   }
}



   
// make the buttons rock paper scissors respond when clicked
const playButtons = Array.from(document.getElementsByClassName('play-buttons'));
playButtons.forEach(button => button.addEventListener('click', game));

let playerSelection;

// main function of the script
function game(e) {
  playerSelection = e.target.innerText.toLowerCase();
  computerSelection = computerPlay().toLowerCase();
  roundPlayed = playRound(playerSelection, computerSelection);
  showRoundResult();
  showFinalResult();
  updateScores();
}

// variables to make changes into DOM
const bodySection = document.querySelector('#body-section');
const buttonsDiv = document.querySelector('#choice-btns');
const showResultDiv = document.querySelector('#results-show');


// display the round result on the screen
function showRoundResult() {
  const roundDiv = document.createElement('div');
  roundDiv.classList.add('round-played');
  roundDiv.textContent = `${roundPlayed}`;
  showResultDiv.appendChild(roundDiv)
}

// parameter to decide which message will be the end result
function finalResult() {
  if (playerScore == 5) {
    return "You won the game! You beat the computer!";
  } else if (computerScore == 5) {
    return "Oh no! The computer beat you this time. You should try again!";
  } else {
    return '';
  }
}

// function to show the end result and update the round result
function showFinalResult() {
  finalText = finalResult();
  const resultDiv = document.createElement('div');
  
  if (showResultDiv.childNodes.length > 1 && 
    (playerScore < 5 && computerScore < 5)) {
    showResultDiv.removeChild(showResultDiv.firstChild);

  } else
  if (playerScore == 5 || computerScore == 5) {
    showResultDiv.removeChild(showResultDiv.firstChild);
    showResultDiv.removeChild(showResultDiv.firstChild);
    resultDiv.classList.add('final-result');
    resultDiv.textContent = `${finalText}`;
    showResultDiv.appendChild(resultDiv);
    playButtons.forEach(btn => btn.disabled = true);
  }
}

// updates both player and computer scores accordingly
function updateScores() {
  document.getElementsByClassName('player-total')[0].innerText = playerScore;
  document.getElementsByClassName('machine-total')[0].innerText = computerScore;
}

