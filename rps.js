function getComputerChoice() {
    // Get pseudo-random number between 0 and 1 then scale it 
    // so it's 0, 1, or 2.
    let randomInt = Math.floor(Math.random() * 3);
    
    if (randomInt == 0) {
        return "Rock";
    }
    else if (randomInt == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection == computerSelection) {
        result = `It was a tie! Both players chose ${playerSelection}.`;
    }
    // Player chose Rock, Computer chose Scissors
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        result = `You win! Rock beats Scissors.`;
    }
    // Player chose Paper, Computer chose Rock
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        result = `You win! Paper beats Rock.`;
    }
    // Player chose Scissors, Computer chose Paper
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        result = `You win! Scissors beats Paper.`;

    }
    else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    return result;
};

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result.slice(0,8) === "You win!") {
            playerScore += 1;
            console.log(result);
        }
        else if (result.slice(0,9) === "You lose!") {
            computerScore += 1;
            console.log(result);
        }
        else {
            console.log(result);
        }    
        }
    
    if (playerScore > computerScore) {
        return "Player wins!"
    }
    else {
        return "Computer wins!"
    }
};


// const playerSelection = "Scissors";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));