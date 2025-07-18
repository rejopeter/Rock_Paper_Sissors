let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  const rounds = Number(document.getElementById('input').value);
  playGamelayRound(rounds)
});
function getHumanChoice() {
  return new Promise((resolve) => {
    const handler = (choice) => () => resolve(choice);
    document.getElementById("rock").addEventListener("click", handler("ROCK"), { once: true });
    document.getElementById("paper").addEventListener("click", handler("PAPER"), { once: true });
    document.getElementById("sissors").addEventListener("click", handler("SISSORS"), { once: true });
  });
}
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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;
function playRound(humanSelection, computerSelection) {
  console.log("Humam = " + humanSelection);
  console.log("Computer = " + computerSelection);
  if (humanSelection === computerSelection) {
    console.log("The match is a tie.");
    document.getElementById("result").innerHTML = "The match is a tie.";
  } else if ((humanSelection === "ROCK") && (computerSelection === "SISSORS") || (humanSelection === "PAPER") && (computerSelection === "ROCK") || (humanSelection === "SISSORS") && (computerSelection === "PAPER")) {
    humanScore++;
    console.log("You win this Round");
    document.getElementById("result").innerHTML = "You win this Round!!!";
  } else {
    computerScore++
    console.log("Computer wins this Round");
    document.getElementById("result").innerHTML = "Computer wins this Round!";
  }
  document.getElementById("humanScore").innerHTML = + String(humanScore);
  document.getElementById("computerScore").innerHTML = + String(computerScore);
}
async function playGamelayRound(rounds) {
  for (let i = 0; i < rounds; i++){
    document.getElementById("rounds").innerHTML = i+1;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("sissors").disabled = false;
    const humanSelection = await getHumanChoice();
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("sissors").disabled = true;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log("Human Score = " + humanScore);
  console.log("Computer Score = " + computerScore);
  if (humanScore > computerScore) {
    console.log("You Win!");
    document.getElementById("win").innerHTML = "You win!";
  } else if (humanScore < computerScore){
    console.log("You lose!");
    document.getElementById("win").innerHTML = "Computer wins the game!";
  } else {
    console.log("It's a Tie!");
    document.getElementById("win").innerHTML = "The match is a tie.";
  }
}