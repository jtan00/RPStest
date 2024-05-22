function getComputerChoice() {
    roll = Math.random()
    if (roll >= 2/3) {
        choice = "Rock";
    }
    else if (roll >= 1/3) {
        choice = "Scissors";
    }
    else {
        choice = "Paper";
    }
    return(choice)
}

function getHumanChoice(hchoice = prompt("Rock, Paper, Scissors?")) {
    var word
    word = hchoice.toLowerCase()
    if (word === "rock" || word === "paper" || word === "scissors") {
        decision = word.charAt(0).toUpperCase() + hchoice.slice(1)
        return(decision)
    }
    else{
        console.log("Invalid input, please refresh page to try again.")
    }
    return
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return("Draw!")
    }
    else if((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice ==="Paper") || (humanChoice === "Paper" && computerChoice === "Rock")) {
        humanScore++
        return ("You Win! " + humanChoice + " beats " + computerChoice)
    }
    else if ((computerChoice === "Rock" && humanChoice === "Scissors") || (computerChoice === "Scissors" && humanChoice ==="Paper") || (computerChoice === "Paper" && humanChoice === "Rock")) {
        computerScore++
        return ("You Lose! " + computerChoice + " beats " + humanChoice)
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.log(playRound(humanSelection, computerSelection))
        if (humanSelection === null) {
            return
        }
    }
    console.log("Your Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
    if(humanScore === computerScore) {
        return("Draw!")
    }
    else if (humanScore > computerScore) {
        return("You Win!")
    }
    else {
        return("You Lose!")
    }
}

console.log(playGame())