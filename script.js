
const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', () => {
    let choice = 'rock';
    playRound(choice, getComputerChoice());
    console.log(choice);
    return choice;
});

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', () => {
    let choice = 'paper';
    playRound(choice, getComputerChoice());
    console.log(choice);
    return choice;
});

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    let choice ='scissors';
    playRound(choice, getComputerChoice());
    console.log(choice);
    return choice;
});


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()*choices.length);
    let randomElement = choices[randomIndex];
    console.log(randomElement);
    return randomElement;
}

let computerWin = 'The computer won! Dang it!';
let playerWin = 'You won! Awesome!';
let tie = 'It\'s a tie!'

function playRound(choice, randomElement) {
    
    if (choice == 'rock' && randomElement == 'rock') {
        const results = document.querySelector('#results');
        const round = document.createElement('div');
        round.classList.add('round');
        round.textContent = tie;
        results.appendChild(round);
        return tie;

    } else if (choice == 'rock' && randomElement == 'paper') {
        const results = document.querySelector('#results');
        const round = document.createElement('div');
        round.classList.add('round');
        round.textContent = computerWin;
        results.appendChild(round);

        const cScore = document.querySelector('#computerScore');
        cScore.textContent = 'Computer Score: ' + computerScore++;
        return computerWin;

    } else if (choice == 'rock' && randomElement == 'scissors') {
        const results = document.querySelector('#results');
        const round = document.createElement('div');
        round.classList.add('round');
        round.textContent = playerWin;
        results.appendChild(round);

        const pScore = document.querySelector('#playerScore');
        pScore.textContent = 'Player Score: ' + playerScore++;
        return playerWin;

    } else if (choice == 'scissors' && randomElement == 'scissors') {
        const results = document.querySelector('#results');
        const round = document.createElement('div');
        round.classList.add('round');
        round.textContent = tie;
        results.appendChild(round);
        return tie;

    } else if (choice == 'scissors' && randomElement == 'paper') {
        const results = document.querySelector('#results');
        const round = document.createElement('div');
        round.classList.add('round');
        round.textContent = playerWin;
        results.appendChild(round);

        const pScore = document.querySelector('#playerScore');
        pScore.textContent = 'Player Score: ' + playerScore++;
        return playerWin;

    } else if (choice == 'scissors' && randomElement == 'rock') {
        const results = document.querySelector('#results');
        const round = document.createElement('div');
        round.classList.add('round');
        round.textContent = computerWin;
        results.appendChild(round);

        const cScore = document.querySelector('#computerScore');
        cScore.textContent = 'Computer Score: ' + computerScore++;
        return computerWin;

    } else if (choice == 'paper' && randomElement == 'paper') {
        const results = document.querySelector('#results');
        const round = document.createElement('div');
        round.classList.add('round');
        round.textContent = tie;
        results.appendChild(round);
        return tie;

    } else if (choice == 'paper' && randomElement == 'rock') {
        const results = document.querySelector('#results');
        const round = document.createElement('div');
        round.classList.add('round');
        round.textContent = playerWin;
        results.appendChild(round);

        const pScore = document.querySelector('#playerScore');
        pScore.textContent = 'Player Score: ' + playerScore++;
        return playerWin;

    } else if (choice == 'paper' && randomElement == 'scissors') {
        const results = document.querySelector('#results');
        const round = document.createElement('div');
        round.classList.add('round');
        round.textContent = computerWin;
        results.appendChild(round);

        const cScore = document.querySelector('#computerScore');
        cScore.textContent = 'Computer Score: ' + computerScore++;
        return computerWin;

    } else {
        return "Oops! Try typing 'rock', 'paper', or 'scissors'."
    }

}

let computerScore = 1;
let playerScore = 1;

function playGame() {
    
for (let i = 0; i < 5; i++) {
    const choice = choice;
    const randomElement = getComputerChoice();
    console.log(playRound(choice, randomElement));
}

if (computerScore > playerScore) {
    return 'Shoot! You lost. Play again?';
} else if (computerScore < playerScore) {
    return 'Hooray! You won. Play again!';
} else {
    return 'It was a tie. Play again.';
}

}