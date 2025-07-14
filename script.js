let getComputerChoice;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let choice = getRandomInt(3)
if (choice == 0) {
    getComputerChoice = "ROCK"
} else if (choice == 1) {
    getComputerChoice = "PAPER"
} else {
    getComputerChoice = "SISSORS"
}
console.log(getComputerChoice)
let getHumanChoice
let Choice = prompt("Rock Paper Sissors");
switch(Choice) {
  case "ROCK":
    getHumanChoice = "ROCK";
    break;
  case "PAPER":
    getHumanChoice = "PAPER";
  default:
    getHumanChoice = "SISSORS";
}
let humanScore;
let computerScore;
humanScore = 0;
computerScore = 0;
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
