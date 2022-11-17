function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "Rock";
    }
    else if (randomNumber == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
     
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper!";
    }
    // Above segment is when players wins.

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper!";
    }
    // Above segment is when computer wins.

    else {
        return "Draw!"
    }
    //Draw
}