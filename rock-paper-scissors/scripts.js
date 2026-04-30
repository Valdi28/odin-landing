// 1) ask the user for input and store it in a variable

function askUser() {
    const validOptions = ["rock", "paper", "scissors"]

    while (true) {
        const input = prompt("Which one you decide: Rock, Paper or Scissors?");

        if (validOptions.includes(input.toLowerCase()))  return input.toLowerCase()
    }
};

function randomPick() {
    const validOptions = ["rock", "paper", "scissors"]
    
    const index = Math.floor(Math.random()*3)

    return validOptions[index]
}

// 0 = tie; 1 = wins; -1 = loses
function playerWins(player, machine) {
    switch (player) {
        case "rock":
            if (machine==="rock") {
                return 0
            } else if (machine=="paper") {
                return -1
            } else {
                return 1
            }
            
        case "paper":
            if (machine==="paper") {
                return 0
            } else if (machine=="scissors") {
                return -1
            } else {
                return 1
            }

        case "scissors":
            if (machine==="scissors") {
                return 0
            } else if (machine=="rock") {
                return -1
            } else {
                return 1
            }

    }

}

function playRound(playerPick, machinePick) {
    if(playerWins(playerPick, machinePick) === 1) {
        playerScore++;
        return 'win'

    } else  if(playerWins(playerPick, machinePick) === -1) {
        machineScore++;
        return 'lose'

    } else {
        return 'tie'
    }
}

let playerScore = 0
let machineScore = 0


/*
const pointsToWin = 5

function playGame(pointsToWin) {
    while (machineScore < pointsToWin && playerScore < pointsToWin) {
        playRound(askUser(), randomPick());
        console.log(playerScore, machineScore);
    };

    if (playerScore === pointsToWin) {
        alert('You won the game!')
    } else if (machineScore === pointsToWin) {
        alert('You lost the game')
    }
}


playGame(5);
*/

const selection = document.querySelector('.selection')

selection.addEventListener('click', (event) => {

    let userElection;
    
    const textContent = event.target.textContent;

    switch (textContent.toLowerCase()) {
        case 'rock':
            userElection = 'rock';
            break;
        case 'paper':
            userElection = 'paper';
            break;
        case 'scissors':
            userElection = 'scissors';
            break;
        default:
            return;
    };

    const resultElement = document.querySelector('.result');
    const machinePick = randomPick()
    const result = playRound(userElection, machinePick);

    console.log(result)
    switch (result) {
        case 'win':
            resultElement.textContent = `You won this round!!! Machine pick was ${machinePick}`;
            break;

        case 'lose':
            resultElement.textContent = `You lost this round. Machine pick was ${machinePick}`;
            break;

        case 'tie':
            resultElement.textContent = `It's a tie. Machine pick was ${machinePick}`;
            break;

    };

    const scoreToWin = 5;

    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = `Score: ${playerScore}-${machineScore}`;

    if (playerScore === scoreToWin) {
        event.target.style.display = "none";
        alert('You won!');
    };

    if (machineScore === scoreToWin) {
        event.target.parentNode.style.display = "none";
        alert('You lost!');
    };
});