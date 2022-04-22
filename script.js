const computerSelection = computerPlay();

function computerPlay() {
    let value = Math.round(Math.random() * 2) + 1

    if (value === 1) {
        return "rock"
    }
    else if (value === 2) {
        return "paper"
    }
    else {return "scissors"}
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        console.log("Tie!");
        return "tie";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        console.log("You lose!, Paper beats Rock!")
        return "lose";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        console.log("You win!, Rock beats Scissors!")
        return "win";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        console.log("You win!, Paper beats Rock!")
        return "win";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        console.log("Tie!")
        return "tie";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        console.log("You lose!, Scissors beats Paper!")
        return "lose";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        console.log("You lose!, Scissors beats Paper");
        return "lose";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        console.log("You win!, Scissors beats Paper");
        return "win";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        console.log("Tie!");
        return "tie";
    }
    else {console.warn("That's not a valid option!")}
}

function game() {
    for (let i = 0; i < 5; i++) {
        let selection = prompt("Rock, Paper or Scissors?")

        const playerSelection = selection;

        if (selection.toLowerCase() == "rock") {
        selection = "rock"
        }
        else if (selection.toLowerCase() == "paper") {
        selection = "paper"
        }
        else if (selection.toLowerCase() == "scissors") {
            selection = "scissors"
        }
        
        playRound(playerSelection, computerSelection)
    }
}

game();