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
    default:
        return null;
  }
}

function playMatch(playerChoice, computerChoice){
    if (playerChoice == computerChoice){return 2}
    if (playerChoice > computerChoice && !(playerChoice==2 && computerChoice == 0) || (playerChoice == 0 && computerChoice == 2)) {
        return 1;
    }
    else{
        return 0;
    }

}

function align(choice){
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scirssors"
    }
}
while (true){
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()
    if (playerChoice === null){continue;}
    console.log(`${align(playerChoice)} vs ${align(computerChoice)}...\n`)
    switch(playMatch(playerChoice, computerChoice)){
        case 1:{console.log("Player wins!"); break;}
        case 0:{console.log("Computer wins!"); break;}
        case 2:{console.log("Tie!"); break;}
    }
}