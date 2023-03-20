function getComputerChoice() {
    // Get pseudo-random number between 0 and 1 then scale it 
    // so it's 0, 1, or 2.
    let randomInt = Math.floor(Math.random() * 3);
    return randomInt;
};

function game() {

    let playerScore = 0;
    let computerScore = 0;
    const max_rounds = 5;
    round_ctr = 0;

    const playerSpan = document.getElementById('playerScore');
    const compSpan = document.getElementById('computerScore');
    const resultSpan = document.getElementById('roundResult');
    const winnerSpan = document.getElementById('winner');
    
    newGameBtn.remove();
    playerSpan.innerText = "0";
    compSpan.innerText = "0";
    resultSpan.innerText = "";
    winnerSpan.innerText = "";

    const choices = ["Rock", "Paper", "Scissors"];

    choices.forEach(choice => {
        const choiceBtn = document.createElement('button');
        choiceBtn.appendChild(document.createTextNode(`${choice}`));
        choiceBtn.setAttribute("value", choices.indexOf(choice));
        choiceBtn.addEventListener('click', () => {
            if (round_ctr < max_rounds) {
                playRound(choiceBtn.getAttribute('value'));
            }
        });
        document.body.appendChild(choiceBtn);
    })

    function playRound(playerSelection) {       
        computerSelection = getComputerChoice();
    
        if (playerSelection == computerSelection) {
            resultSpan.innerText = "Round was a tie!";
        }
        // This emulates the relationship: 2 > 0 > 1 > 2
        // Player wins if their selection is 1 greater than computer selection under modulo
        else if ((computerSelection + 1) % 3 == playerSelection) {
            resultSpan.innerText = "Player won the round!";
            playerScore += 1;
            playerSpan.innerText = playerScore;
        }
        else {
            resultSpan.innerText = "Computer won the round!"
            computerScore += 1;
            compSpan.innerText = computerScore;
        }
        
        round_ctr++;
        if (round_ctr >= max_rounds) {
            determineWinner();
            resetGame();
            newGameBtn.firstChild.nodeValue = "Play again";
            document.body.appendChild(newGameBtn);
        }
    };

    function determineWinner() {
        if (playerScore > computerScore) {
            winnerSpan.innerText = "Player wins!";

        }
        else if (playerScore == computerScore) {
            winnerSpan.innerText = "It was a tie!";
        }
        else {
            winnerSpan.innerText = "Computer wins!";
        }
    }

    function resetGame() {
        document.querySelectorAll('button').forEach(button => {
            button.remove();
        })
    }
    return 0;
};



const newGameBtn = document.createElement('button');
newGameBtn.appendChild(document.createTextNode("Play"));
newGameBtn.addEventListener('click', () => {
    // document.getElementById('winner').innerText = "";
    game();
});
document.body.insertBefore(newGameBtn,document.getElementById('winner'));
// document.body.appendChild(newGameBtn);

    // rock.addEventListener('click', function() {
    //     let result = playRound(0);
    //     if (result == "tie") {
    //         console.log(`It was a tie! Both players chose ${choices[playerSelection]}.`);
    //     }
    //     else if (result == "player") {
    //         playerScore += 1;
    //         console.log(`You win! ${choices[playerSelection]} beats ${choices[computerSelection]}`);
    //     }
    //     else if (result == "computer") {
    //         computerScore += 1;
    //         console.log(`You lose! ${choices[computerSelection]} beats ${choices[playerSelection]}.`);
    //     }
    // })