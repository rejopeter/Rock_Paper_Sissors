function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let choice = getRandomInt(3);
  if (choice == 0) {
      return "ROCK";
  } else if (choice == 1) {
      return "PAPER";
  } else {
      return "SISSORS";
  }
}
function getHumanChoice() {
  return String(prompt("Rock, Paper, or Sissors?")).toUpperCase();
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(getHumanChoice);
console.log(getComputerChoice);
let humanScore = 0;
let computerScore = 0;
function playRound(humanSelection, computerSelection) {
  console.log("Humam = " + humanSelection);
  console.log("Computer = " + computerSelection);
  if (humanSelection === computerSelection) {
    console.log("The match is a tie.");
    alert("The match is a tie.");
  } else if ((humanSelection === "ROCK") && (computerSelection === "SISSORS") || (humanSelection === "PAPER") && (computerSelection === "ROCK") || (humanSelection === "SISSORS") && (computerSelection === "PAPER")) {
    humanScore++;
    console.log("You win this Round");
    alert("You win the game!");
  } else {
    computerScore++
    console.log("Computer wins this Round");
    alert("Computer wins the game!");
  }
}
rounds = 5;
function playGamelayRound(rounds) {
  for (let i = 0; i < rounds; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  alert("Human Score = " + humanScore);
  alert("Computer Score = " + computerScore)
  console.log("Human Score = " + humanScore);
  console.log("Computer Score = " + computerScore);
  if (humanScore > computerScore) {
    console.log("You Win!");
    alert("You win the game!");
  } else if (humanScore < computerScore){
    console.log("You lose!");
    alert("Computer wins the game!");
  } else {
    console.log("It's a Tie!");
    alert("It's a tie!");
  }
}
playGamelayRound(rounds);