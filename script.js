function getComputerChoice() {
    num = Math.random();
    if (num < 0.333) {
        return "rock";
    } else if (num < 0.667) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Enter rock, paper, or scissors");
    input = input.toLowerCase();
    if (input == "rock") {
        return "rock";
    } else if (input == "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie")
        return -1;
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock")
            return 0;
        } else {
            console.log("You win! Rock beats scissors")
            return 1
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper")
            return 0;
        } else {
            console.log("You win! Paper beats rock")
            return 1
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors")
            return 0;
        } else {
            console.log("You win! Scissors beats paper")
            return 1
        }  
    }      
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        
        if (result == 0) {
            computerScore = computerScore + 1;
        } else if (result == 1) {
            humanScore = humanScore + 1;
        }
    }

    if (computerScore == humanScore) {
        console.log("draw")
    } else if (computerScore < humanScore) {
        console.log("player wins")
    } else {
        console.log("computer wins")
    }
}

playGame();