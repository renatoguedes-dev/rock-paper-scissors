const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");
const allButtons = document.querySelectorAll("button");
const buttonsArray = Array.from(allButtons);
const availableOptions = ["Rock", "Paper", "Scissors"];
const playerScoreDisplay = document.querySelector(".player-score.player-total");
const computerScoreDisplay = document.querySelector(".machine-score.machine-total");
const showResults = document.querySelector(".show-result");
const para = document.querySelector(".result-paragraph");

let computerScore = 0;
let playerScore = 0;
let tie = false;
let roundResult;

function getComputerChoice() {
  
  // Generate a random number between 0 and 2 
  // this number will be used as index on the computerChoice array
    let randomNumber = Math.floor(Math.random() * 3);
  
  return availableOptions[randomNumber];
}

// Function to handle button clicks (player choice)
function selectAndPlay(e) {
  const clickedButtonText = e.target.innerText;
  let playerSelection = clickedButtonText;
  let computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
  changeScore();
  showResult();
  declareWinner();
}

// Single round function. It adds a score to the winner of round, do nothing 
// if it's a tie  
function playRound(playerSelection, computerSelection) {

  if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    roundResult = "You Lose! Paper beats Rock";
    return "You Lose! Paper beats Rock";

  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    roundResult = "You Win! Rock beats Scissors"
    return "You Win! Rock beats Scissors";

  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    roundResult = "You Win! Paper beats Rock";
    return "You Win! Paper beats Rock";

  }  else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    roundResult = "You Lose! Scissors beats Paper";
    return "You Lose! Scissors beats Paper";

  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    roundResult = "You Lose! Rock beats Scissors";
    return "You Lose! Rock beats Scissors";

  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    roundResult = "You Win! Scissors beats Paper";
    return "You Win! Scissors beats Paper";

  } else if (playerSelection === "Rock" && computerSelection === "Rock" || 
    playerSelection === "Paper" && computerSelection === "Paper" || 
    playerSelection === "Scissors" && computerSelection === "Scissors") {
    roundResult = "Tie!";
    return "Tie!";
   }
}

function changeScore() {
  if (computerScore > 5 || playerScore > 5) {
    return;
  } else {
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
  }
}

function showResult() {
  if (computerScore > 5 || playerScore > 5) {
    return;
  } else if (para.innerText === "Tie!" && roundResult === "Tie!") {
    para.innerText = "Tie again!"
  } else if (para.innerText === "Tie again!" && roundResult === "Tie!") {
    para.innerText = "Wow! Tie one more time!"
  } else {
    para.innerText = roundResult;
  }
}

function declareWinner() {
  if (computerScore === 5) {
    para.innerText = "The machine won with 5 points :("
    disableAllButtons();

  } else if (playerScore === 5) {
    para.innerText = "You won! You got 5 points! :D"
    disableAllButtons();

  } else {
    return;
  }
}

function disableAllButtons() {
  buttonsArray.forEach(button => {
    button.disabled = true;
  })
}

// Attach click event listeners to buttons
rockButton.addEventListener("click", selectAndPlay);
paperButton.addEventListener("click", selectAndPlay);
scissorsButton.addEventListener("click", selectAndPlay);

