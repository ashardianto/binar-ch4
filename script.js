const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
let result = document.querySelector(".info-typo");
const refresh = document.getElementById("refresh");
const playerChoice = document.querySelectorAll(".player-pick img");
const computerChoice = document.querySelectorAll(".computer-pick img");

function gameFunction() {
    rock.addEventListener('click', function(e) {
        game("rock", e.currentTarget);
    });    
    paper.addEventListener('click', function(e) {
        game("paper", e.currentTarget);
    });    
    scissor.addEventListener('click', function(e) {
        game("scissor", e.currentTarget);
    });   
}

function game(userChoice, target) {
    const computerChoice = playerComputerChoice();
    const playerElements = [].slice.call(document.querySelectorAll('.choice'));

    playerElements.forEach(e => (e.removeAttribute('style')));
    target.style.background = "white";

    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            result.innerHTML = "You Win!";
            break;
        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            result.innerHTML = "You Lose!";
            break;
        case "scissorscissor":
        case "paperpaper":
        case "rockrock":
            result.innerHTML = "Draw!";
    }
}

function playerComputerChoice() {
    const choices = ['rock', 'paper', 'scissor']
    const randomChoice = Math.floor(Math.random() * choices.length);

    const computerElement  = document.getElementById('computer-' + choices[randomChoice]);
    const computerElements = [].slice.call(document.querySelectorAll('.choice-computer'));

    computerElements.forEach(e => (e.removeAttribute('style')));
    computerElement.style.backgroundColor = 'white';

    return choices[randomChoice];
}

refresh.addEventListener('click', function() {
    const playerElements = [].slice.call(document.querySelectorAll('.choice'));
    playerElements.forEach(e => (e.removeAttribute('style')));

    const computerElements = [].slice.call(document.querySelectorAll('.choice-computer'));
    computerElements.forEach(e => (e.removeAttribute('style')));
    result.innerHTML = "VS"
})
gameFunction();
