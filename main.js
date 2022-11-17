function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    }
    else if (randomNumber == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
     
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper!";
    }
    // Above segment is when players wins.

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper!";
    }
    // Above segment is when computer wins.

    else if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")) {
        return "You need to choose rock, paper or scissors!"
    }

    else {
        return "It's a Draw!";
    }
    //Draw
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    
    for (let i = 0; i < 5; i++) {
        let roundPlayed = playRound(prompt("Do you choose Rock, Paper or Scissors?"), getComputerChoice())
        console.log(roundPlayed)
        if (roundPlayed.includes("win")) {playerWins++}
        else if (roundPlayed.includes("lose")) {computerWins++}
        else {
            console.log("Try again!")
            i--
        }
        console.log(`Player: ${playerWins}, Computer: ${computerWins}`)
    }
    if (playerWins > computerWins) {
        console.log("Player wins! Well done!")
    }
    else {
        console.log("Computer wins! Better luck next time!")
    }
}

console.log("Best of 5 game! Good luck!")
game()