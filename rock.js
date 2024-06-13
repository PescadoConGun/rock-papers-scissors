
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice
}

function getHumanSelection() {
    let humanChoice = window.prompt("rock, paper or scissors?").toLowerCase(); 
    return humanChoice;
}

function checkWinner(humanSelection, computerSelection) {
    if(humanSelection == computerSelection) {
        return "Tie";
    }
    else if(
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")
        ){
        return "Player";
        }
    else {
        return "Computer";
    }
}

function playRound(humanSelection,computerSelection) {
    const result = checkWinner (humanSelection, computerSelection);
    console.log("---------------------------------");
    if(result == "Tie"){
        return "It's a Tie"
    }
    else if(result == "Player"){
        return `You Win! ${humanSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${humanSelection}`
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    console.log("Hello and Welcome!")
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanSelection();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    if(checkWinner(humanSelection, computerSelection) == "Player") {
        playerScore++;
        }    
    if(checkWinner(humanSelection, computerSelection) == "Computer") {
        computerScore++;
        }
    }
        console.log("Game Over");
    if(playerScore > computerScore) {
        console.log("Player Wins!");
        }
    else if(playerScore < computerScore) {
        console.log("Computer Wins!");
        }
    else {
        console.log("Wow! It's a Tie!");
    }
    
}
game()

