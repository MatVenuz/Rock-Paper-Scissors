const buttonSelection = document.querySelectorAll(".button-class");
const playerValue = document.getElementById("player-value")
const computerValue = document.getElementById("computer-value")
const replayDiv = document.getElementById("repeat")
const replayButton = document.getElementById("repeat-button")
/* no idea why i can't add/remove attributes at the same time, so i do one by one */
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors") 

/* player selection */
buttonSelection.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id,computerPlay())
    });
});

/* computer selection */
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

/* game rounds */
function playRound(playerSelection, computerPlay) {
    if (playerSelection == "rock") {
        if (computerPlay == "rock") {
            tie(playerSelection,computerPlay)
        }
        else if (computerPlay == "paper") {
            lose(playerSelection,computerPlay)
        }
        else {victory(playerSelection,computerPlay)}
    }
    else if (playerSelection == "paper") {
        if (computerPlay == "rock") {
            victory(playerSelection,computerPlay)
        }
        else if (computerPlay == "paper") {
            tie(playerSelection,computerPlay)
        }
        else {lose(playerSelection,computerPlay)}
    }
    else {
        if (computerPlay == "rock") {
            lose(playerSelection,computerPlay)
        }
        else if (computerPlay == "paper") {
            victory(playerSelection,computerPlay)
        }
        else {tie(playerSelection,computerPlay)}
    }
}

/* result of every round */
victory = (playerSelection,computerPlay) => {
    results.innerHTML = `You win!, ${playerSelection} beats ${computerPlay}`
    matchPoints(1,0)
}

lose = (playerSelection,computerPlay) => {
    results.innerHTML = `You lose!, ${computerPlay} beats ${playerSelection}`
    matchPoints(0,1)
}

tie = (playerSelection,computerPlay) => {
    results.innerHTML = `Tie!, your power is equal to Delirium!`
}

/* points counter */
let pPoints = 0;
let cPoints = 0;

function matchPoints (playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        pPoints++
        playerValue.innerHTML = `${pPoints}`
    }
    else if(playerPoints < computerPoints) {
        cPoints++
        computerValue.innerHTML = `${cPoints}`
    }
    matchStatus(playerPoints,computerPoints)
}

/* match result */
function matchStatus(playerPoints,computerPoints) {
    if (pPoints == 5) {
        results.innerHTML = "Congratulations!, you finally beat Delirium";
        rock.setAttribute("disabled","disabled");
        paper.setAttribute("disabled","disabled");
        scissors.setAttribute("disabled","disabled");
        replayDiv.style.display = "flex";
    }
    else if(cPoints == 5) {
        results.innerHTML = "I'm so sorry, Delirium instantly teleport above you and you die :(";
        rock.setAttribute("disabled","disabled");
        paper.setAttribute("disabled","disabled");
        scissors.setAttribute("disabled","disabled");
        replayDiv.style.display = "flex";
    }
}

/* reset button */
replayButton.addEventListener("click",() => {
    pPoints = 0
    cPoints = 0
    playerValue.innerHTML = "0"
    computerValue.innerHTML = "0"
    results.innerHTML = "Select your item"
    replayDiv.style.display = "none"
    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled");
    scissors.removeAttribute("disabled");
})