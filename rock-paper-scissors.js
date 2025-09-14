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
    if(isPlayerOneWinner(humanChoice, computerChoice)) {
        alert(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (isPlayerOneWinner(computerChoice, humanChoice)) {
        alert(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        alert(`It\'s even! You both chose ${humanChoice}`);
    }
}

function printScore() {
    return `\n \tHuman Score: ${humanScore} \n \tComputer Score: ${computerScore} `;
}

function playGame() {
    for(let i = 0; i < ROUND_NUMBERS && !quitGame; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore) {
        alert(`Congratulations! ${printScore()}`)
    } else if(humanScore < computerScore) {
        alert(`You Lose! ${printScore()}`)
    } else {
        alert(`Even! ${printScore()}`);
    }
}

let humanScore = 0;
let computerScore = 0;
let quitGame = false;

//playGame();


