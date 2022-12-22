let winners = [];
const choices = ['rock', 'paper', 'scissors'];

function computerSelect() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    
    document.querySelector(`.${choice}`).classList.add('active');

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove('active');
    }, 700);
    
    return choice;
}


function determineWinner(choice1, choice2) { //checkWinner()
    if ((choice1 == 'rock' && choice2 == 'scissors') ||
        (choice1 == 'paper' && choice2 == 'rock') ||
        (choice1 == 'scissors' && choice2 == 'paper')) {
            return 'Player';
        } else if (choice1 == choice2) {
            return 'Tie';
        } else {
            return 'Computer';
        }
}

function totalWins() { //checkWins()
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;

    return Math.max(pWinCount, cWinCount);
}

function displayRoundWinner(winner) {
    if (winner == 'Player') {
        document.querySelector('.winner').textContent = 'You won the round!';
    } else if (winner == 'Computer') {
        document.querySelector('.winner').textContent = 'The computer won the round.';
    } else {
        document.querySelector('.winner').textContent = 'This round was a tie.';
    }
}

function displayRoundChoices(playerChoice, computerChoice, winner) { //displayRound()
    document.querySelector('.playerChoice').textContent = `You chose: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`;
    document.querySelector('.computerChoice').textContent = `The computer chose: ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`;
    displayRoundWinner(winner);
}

function displayScore() { //tallyWins()
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    const tie = winners.filter((item) => item == 'Tie').length;

    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Ties: ${tie}`;
}

function displayEnd() {
    const playerWins = winners.filter((item) => item == 'Player').length

    if (playerWins == 5) {
        document.querySelector('.winner').textContent = 'You won 5 times! Congrats!';
    } else {
        document.querySelector('.winner').textContent = 'The computer won 5 times.';
    }

    document.querySelector('.reset').style.display = 'flex';
}

function playRound(playerChoice) {
    let wins = totalWins();
    if (wins >= 5) {
        return;
    }

    const computerChoice = computerSelect();

    const winner = determineWinner(playerChoice, computerChoice);
    winners.push(winner);

    
    displayScore();
    displayRoundChoices(playerChoice, computerChoice, winner);
    
    wins = totalWins();
    if (wins == 5) {
    displayEnd();
    }
}

function startGame() {
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => 
    img.addEventListener(('click'), () => {
        if(img.id) {
            playRound(img.id);
        }
    })
    );
}

function resetGame() {
winners = [];
document.querySelector('.playerScore').textContent = 'Score: 0';
document.querySelector('.computerScore').textContent = 'Score: 0';
document.querySelector('.ties').textContent = 'Ties: 0';
document.querySelector('.winner').textContent = '';
document.querySelector('.playerChoice').textContent = '';
document.querySelector('.computerChoice').textContent = '';
document.querySelector('.reset').style.display = 'none';
}

startGame();