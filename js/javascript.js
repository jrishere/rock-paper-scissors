let roundCount = 1;
let tieCount = 0;
let humanScore = 0;
let computerScore = 0;
let choice;

let randomNum = 0;
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*100);
    if(randomNum >= 0 && randomNum < 33)
        return "Rock";
    else if(randomNum >= 33 && randomNum < 66)
        return "Paper";
    else if(randomNum >= 66)
        return "Scissors";
}

function getHumanChoice() {
    choice = prompt("Rock, Paper, Scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    if(humanChoice == computerChoice)
    {
        tieCount += 1;
        return 1; // 1 = tie
    }
    else if(
        (humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (humanChoice == "SCISSORS" && computerChoice == "PAPER") ||
        (humanChoice == "PAPER" && computerChoice == "ROCK")
    ) {
        humanScore +=1;
        return 2; // 2 = human win
    }
    else {
        computerScore +=1;
        return 3; // 3 = computer win
    }
}

function playGame() {
    for(let i = 0; i < 5; i++)
    {
        let computer = getComputerChoice();
        let human = getHumanChoice().toLowerCase();
        human = human.charAt(0).toUpperCase() + human.slice(1);
        let result = playRound(human, computer)
        if(result == 1)
            console.log(`Round: ${roundCount}: Tie game!`);
        else if(result == 2)
            console.log(`Round: ${roundCount}: Human wins! ${human} beats ${computer}!`)
        else if(result == 3)
            console.log(`Round: ${roundCount}: Computer wins! ${computer} beats ${human}!`)
        roundCount +=1;
    }
}

playGame();
console.log(`Score:\nHuman: ${humanScore}\nComputer: ${computerScore}\nTies: ${tieCount}`)

if(humanScore > computerScore)
    console.log("Human wins!")
else if(computerScore > humanScore)
    console.log("Computer wins!")
else   
    console.log("Tie game!")
