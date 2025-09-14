const ROCK_PAPER_SCISSORS_MAP = new Map();
ROCK_PAPER_SCISSORS_MAP.set(0, 'ROCK');
ROCK_PAPER_SCISSORS_MAP.set(1, 'PAPER');
ROCK_PAPER_SCISSORS_MAP.set(2, 'SCISSORS');

const ROUND_NUMBERS = 5;

function getComputerChoice() {
    return ROCK_PAPER_SCISSORS_MAP.get(Math.floor((Math.random() * 3)));
}

function checkPlayerChoiceValidity(playerChoice) {
    return !playerChoice || Array.from(ROCK_PAPER_SCISSORS_MAP.values()).includes(playerChoice.toUpperCase());
}

function getHumanChoice() {
    let isChoiceValid = false;
    let playerChoice;
    while (!isChoiceValid) {
        playerChoice = prompt("Rock Paper or scissors?");
        if(!playerChoice) {
            quitGame = true;
            break;
        }
        playerChoice = playerChoice.toUpperCase();
        isChoiceValid = checkPlayerChoiceValidity(playerChoice);
        if(!isChoiceValid) {
            alert('ATTENZIONE! Inserire una scelta valida!');
        }
    }
    return playerChoice;
}

function isPlayerOneWinner(playerOne, playerTwo) {
    if(
        (playerOne === "ROCK" && playerTwo === "SCISSORS") ||
        (playerOne === "PAPER" && playerTwo === "ROCK")  || 
        (playerOne === "SCISSORS" && playerTwo === "PAPER")
    ) return true;
}

function playRound(humanChoice, computerChoice) {
    if(quitGame) {
        return;
    }

    let roundResultMessage = "";
    if(isPlayerOneWinner(humanChoice, computerChoice)) {
        roundResultMessage = `You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (isPlayerOneWinner(computerChoice, humanChoice)) {
        roundResultMessage = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        roundResultMessage = `It\'s even! You both chose ${humanChoice}`;
    }


    computerChoiceNode.textContent = computerChoice;
    userChoiceNode.textContent = humanChoice;
    computerScoreNode.textContent = computerScore;
    userScoreNode.textContent = humanScore;
    roundResultNode.textContent = roundResultMessage;

   

    if(!checkWinner()) {
        console.log("inside check winner")
        if(roundNumber === 0) {
            scoreContainer.classList.remove("hide");
            roundChoiceContainer.classList.remove("hide");
        }

        roundNumber++;
    }

    console.log(roundNumber);
}

function printScore() {
    return `\n \tHuman Score: ${humanScore} \n \tComputer Score: ${computerScore} `;
}

function checkWinner() {
    /*for(let i = 0; i < ROUND_NUMBERS && !quitGame; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }*/

    if(humanScore === 5 || computerScore === 5) {
        let message = "";
        if(humanScore > computerScore) {
            message = `Congratulations! ${printScore()}`;
        } else if(humanScore < computerScore) {
            message = `You Lose! ${printScore()}`;
        } else {
            message = `Even! ${printScore()}`;
        }
        
        h1.textContent = message;
        document.querySelector(".button-section").style.display="none";
        return true;
    }

    return false;
}

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let quitGame = false;

const h1 = document.querySelector("h1");
const scoreContainer = document.querySelector(".score-container");
const roundChoiceContainer = document.querySelector(".round-choice-container");
const userChoiceNode = document.querySelector(".user-choice");
const computerChoiceNode = document.querySelector(".computer-choice");
const userScoreNode = document.querySelector(".user-score");
const computerScoreNode = document.querySelector(".computer-score");
const roundResultNode = document.querySelector(".round-result");
document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => playRound(btn.textContent, getComputerChoice())));






