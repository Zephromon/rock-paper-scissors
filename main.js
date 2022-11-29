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
        return "win";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "win";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win";
    }
    // Above segment is when players wins.

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "lose";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "lose";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "lose";
    }
    // Above segment is when computer wins.

    else {
        return "draw";
    }
    //Draw
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let round_played = playRound(buttons[i].textContent.toLowerCase(), getComputerChoice());
        if (round_played == "win") {
            document.querySelector("#player-score").textContent = `${+document.querySelector("#player-score").textContent + 1}`;
        }
        else if (round_played == "lose") {
            document.querySelector("#computer-score").textContent = `${+document.querySelector("#computer-score").textContent + 1}`;
        }
    })
}