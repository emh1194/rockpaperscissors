function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()*choices.length);
    let randomElement = choices[randomIndex];
    return randomElement;
}

let computerWin = 'The computer won! Dang it!';
let playerWin = 'You won! Awesome!';
let tie = 'It\'s a tie!'

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        return tie;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return computerWin;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return playerWin;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        return tie;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return playerWin;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return computerWin;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') {
        return tie;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return playerWin;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return computerWin;
    } else {
        return "Oops! Try typing 'rock', 'paper', or 'scissors'."
    }

}

let computerScore = 0;
let playerScore = 0;

function playGame() {
    
for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('rock, paper, or scissors?');
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

if (computerScore > playerScore) {
    return 'Shoot! You lost. Play again?';
} else if (computerScore < playerScore) {
    return 'Hooray! You won. Play again!';
} else {
    return 'It was a tie. Play again.';
}

}