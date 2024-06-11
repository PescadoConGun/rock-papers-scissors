console.log("¡Hola!")

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
}
getComputerChoice();

function getHumanChoice() {
    let humanChoice = window.prompt("Rock, paper or scissors?"); 
    console.log(humanChoice);
}
getHumanChoice();

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
    if (getHumanChoice == getComputerChoice) {
        return "Tie"
    }
    else if(
        (getHumanChoice == "rock" && getComputerChoice == "scissors") ||
        (getHumanChoice == "paper" && getComputerChoice == "rock") ||
        (getHumanChoice == "scissors" && getComputerChoice == "paper")
        ){
        return "Player"
        }
    else {
        return "Computer"
    }
}

function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);