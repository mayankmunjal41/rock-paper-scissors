
let randomText = ['rock', 'paper', 'scissors'];


let getComputerChoice = () => {  

    return randomText[Math.floor((Math.random() * randomText.length))];
}
let computerSelection = getComputerChoice();
let playerSelection = prompt('Add your choice').toLowerCase();

let playRound = (playerSelection, computerSelection) => {
    if ( computerSelection === playerSelection) {
        return 'Try again'
    }  else if (computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'rock' ) {
        return 'Player wins'
    } else {
        return 'Computer wins'
    }
}
console.log(playRound(playerSelection, computerSelection));




let game = () => {
    
    // if playerchouce = computerchoice, try again
    
    // if playerchoice = rock && computerchoice = paper, computer wins
   
    // if playerchoice = paper && computerchoice = scissors, computer wins

    // if playerchoice = scisors && computerchoice = rock, computer wins

    // if playerchouce = rock && computerchoice = scissors, player wins

    // if playerchoice = scissors && computerchoice = paper, player wins

    // if playerchouce = paper && computerchoice = rock, player wins

}