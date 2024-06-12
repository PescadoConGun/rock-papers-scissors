console.log("¡Hola!")

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice
}

/** function humanSelection() {
    let humanChoice = window.prompt("rock, paper or scissors?"); 
    console.log(humanChoice);
}
humanSelection();
**/
function HumanScore() {
    let HumanScore = 0;
    console.log(HumanScore);
}
HumanScore();

function ComputerScore() {
    let computerScore = 0;
    console.log(computerScore);
}
ComputerScore();

function checkWinner() {
    if(humanSelection == computerSelection) {
        return "Tie"
    }
    else if(
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")
        ){
        return "Player"
        }
    else {
        return "Computer"
    }
}

function playRound(humanSelection,computerSelection) {
    const result = checkWinner (humanSelection, computerSelection);
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

const humanSelection = "rock"
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

/**function game() {
    console.log("Hello and Welcome!")
    for (let i = 0; i < 5; i++) {
        const humanSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}

game()**/
