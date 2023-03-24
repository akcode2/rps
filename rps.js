function getComputerChoice() {
    // Get pseudo-random number between 0 and 1 then scale it 
    // so it's 0, 1, or 2.
    let randomInt = Math.floor(Math.random() * 3);
    return randomInt;
};

let computerScore = 0;
let playerScore = 0;

function game() {

    playerScore = 0;
    console.log("Reset playerScore to " + playerScore);
    computerScore = 0;
    console.log("Reset computerScore to " + computerScore);
    const max_rounds = 5;
    round_ctr = 0;

    const scorePanel = document.querySelector('.scoreTracker');
    const resultPanel = document.querySelector('.messageWindow');
    const playerSpan = document.getElementById('playerScore');
    const compSpan = document.getElementById('computerScore');
    const currentRoundSpan = document.getElementById('currentRound');
    const maxRoundSpan = document.getElementById('maxRounds');
    
    // Hide the new game button once the game starts
    newGameBtn.style.display = "none";

    document.querySelectorAll('.interface > div').forEach(div => {
        div.style.display = "flex";
    });

    currentRoundSpan.innerText = round_ctr + 1;
    maxRoundSpan.innerText = max_rounds;
    playerSpan.innerText = playerScore;
    compSpan.innerText = computerScore;
    resultPanel.innerText = "Let's play Rock, Paper, Scissors!";

    const playerChoiceBtns = document.querySelectorAll('.playerOptions > button');


    // Add event listeners to buttons only if they don't already exist
    // using a "listener" attribute to do the check
    playerChoiceBtns.forEach(choice => {
        if (choice.getAttribute('listener') !== 'true') {
            choice.addEventListener('click', () => {
                if (round_ctr < max_rounds) {
                    playRound(choice.getAttribute('value'));
                }
            })
            choice.setAttribute('listener', 'true');
        };
    });
    

    function playRound(playerSelection) {     
        computerSelection = getComputerChoice();
            
        if (playerSelection == computerSelection) {
            resultPanel.innerText = "We both tied that round!";
        }
        // This emulates the relationship: 2 > 0 > 1 > 2 i.e. Scissors > Rock > Paper > Scissors
        // Player wins if their selection is 1 greater than computer selection under modulo
        else if ((computerSelection + 1) % 3 == playerSelection) {
            resultPanel.innerText = "You won that round!";
            playerScore += 1;
            playerSpan.innerText = playerScore;
        }
        else {
            resultPanel.innerText = "I won that round!"
            computerScore += 1;
            compSpan.innerText = computerScore;
        }
        
        round_ctr++;
        currentRoundSpan.innerText = round_ctr + 1;
        if (round_ctr >= max_rounds) {
            determineWinner();
            currentRoundSpan.innerText = 0;

            // Set display to none on all buttons
            resetGame();
            // Change the new game button's text and set its display to visible
            newGameBtn.firstChild.nodeValue = "Play again";
            newGameBtn.style.display = "";
        }
    };

    function determineWinner() {
        if (playerScore > computerScore) {
            resultPanel.innerText = "You win!";

        }
        else if (playerScore == computerScore) {
            resultPanel.innerText = "It was a tie!";
        }
        else {
            resultPanel.innerText = "I win!";
        }
    }

    function resetGame() {
        document.querySelectorAll('.interface > div').forEach(div => {
            div.style.display = "none";
        });
    }
    return 0;
};



const newGameBtn = document.createElement('button');
newGameBtn.appendChild(document.createTextNode("Play"));
newGameBtn.setAttribute('class', 'button-20');
newGameBtn.setAttribute('role', 'button');
newGameBtn.addEventListener('click', () => {
    game();
});
document.querySelector('.interface').appendChild(newGameBtn);