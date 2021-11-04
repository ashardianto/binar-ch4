const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const result = document.querySelector(".info-typo")
const refresh = document.getElementById("refresh")
const playAgain = document.querySelector(".again-typo")
const computerRock = document.getElementById("computer-rock")
const computerPaper = document.getElementById("computer-paper")
const computerScissor = document.getElementById("computer-scissor")

function playerComputerChoice() {
    const choices = ['rock', 'paper', 'scissor']
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice]
}

function game(userChoice) {
    const computerChoice = playerComputerChoice();
    if (computerChoice === "paper") {
        computerPaper.style.background = "#fff";
        if (userChoice === "scissor") {
            result.innerHTML = "YOU WIN"
        } else if (userChoice === "rock") {
            result.innerHTML = "YOU LOSE"
        } else {
            result.innerHTML = "DRAW"
        }
    } else if (computerChoice === "rock") {
        computerRock.style.background = "#fff"
        if (userChoice === "scissor") {
            result.innerHTML = "YOU LOSE"
        } else if (userChoice === "paper") {
            result.innerHTML = "YOU WIN"
        } else {
            result.innerHTML = "DRAW"
        }
    } else if (computerChoice === "scissor") {
        computerScissor.style.background = "#fff"
        if (userChoice === "rock") {
            result.innerHTML = "YOU WIN"
        } else if (userChoice === "paper") {
            result.innerHTML = "YOU LOSE"
        } else {
            result.innerHTML = "DRAW"
        }
    }
    playAgain.innerHTML = "Press to Play Again"
}

// function computerHand() {
//     const computerChoice = playerComputerChoice();
//     if (computerChoice === "paper") {
//         computerPaper.style.background = "#fff";
//     } else if (computerChoice === "rock") {
//         computerRock.style.background = "#fff"
//     } else if (computerChoice === "scissor") {
//         computerScissor.style.background = "#fff"
//     }
// }

function gameFunction() {
rock.addEventListener('click', function() {
    game("rock");
    rock.style.background = "white"
})

paper.addEventListener('click', function() {
    game("paper");
    paper.style.background = "white"
})

scissor.addEventListener('click', function() {
    game("scissor");
    scissor.style.background = "white"
})
}

refresh.addEventListener('click', function() {
    computerPaper.style.background = "none"
    computerRock.style.background = "none"
    computerScissor.style.background = "none"
    paper.style.background = "none"
    rock.style.background = "none"
    scissor.style.background = "none"
    result.innerHTML = "VS"
    playAgain.innerHTML = ""
})
gameFunction();
// computerHand();