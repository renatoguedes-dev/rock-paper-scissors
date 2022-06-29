// Global variables used in the code

// set player's score to start at zero
let playerScore = 0;

// set computer's score to start at zero
let computerScore = 0;

// variable to help avoid invalid answers
let invalidAnswer = 0;



// create a function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

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


// single round function. It adds a score to the winner of round, do nothing if it's a tie and  
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
  } else {
    // add a invalid answer point to reset the round and make sure there will be 5 pop-ups asking for an answer
    invalidAnswer++;
    while (true) {
      alert("You didn't type a valid answer. Please type 'Rock', 'Paper' or 'Scissors'.");
      return "You didn't type a valid answer. Please type 'Rock', 'Paper' or 'Scissors'.";
    }

  }
}

function game() {

  for (let round = 1; round <= 5; round++) {

    // .toLowerCase() to make sure both player and computer selections will be case insensitive
    playerSelection = prompt("Please choose between 'Rock', 'Paper' or 'Scissors'.").toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    roundPlayed = playRound(playerSelection, computerSelection);
    console.log(roundPlayed);

    // loop to return the invalidAnswer variable back to 0 and reduce the round count by 1 to make sure there will be 5 valid rounds
    while (invalidAnswer == 1) {
      round--;
      invalidAnswer--;
    }
  }

  if (playerScore > computerScore) {
    console.log("You won the game! You beat the computer!");
  } else if (playerScore < computerScore) {
    console.log("Oh no! The computer beat you this time. You should try again!");
  } else if (playerScore == computerScore) {
    console.log("Unbelievable! It's a draw!")
  }
}
   
game();