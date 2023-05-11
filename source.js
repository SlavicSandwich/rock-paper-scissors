function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getPlayerChoice() {
  const choice = prompt("What's your choice?").toLowerCase();
  if (choice != "rock" && choice != "paper" && choice != "scissors") {
    return null;
  }
  return choice;
}

console.log(getComputerChoice());
console.log(getPlayerChoice())
