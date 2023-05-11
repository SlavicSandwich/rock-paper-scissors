function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
  const choice = prompt("What's your choice?").toLowerCase();
  switch (choice){
    case 'rock':
        return 0;
    case 'paper':
        return 1;
    case 'scissors':
        return 2;
  }
}



console.log(getComputerChoice());
console.log(getPlayerChoice())
