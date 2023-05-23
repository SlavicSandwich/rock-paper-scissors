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

function to_string(choice){
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scirssors"
    }
}

function to_num(choice){
    switch(choice){
        case 'Rock':
            return 0;
        case 'Paper':
            return 1;
        case "Scissors":
            return 2;
    }
}

function set_winner(winner){
    switch(winner){
        case 1:return 'player';
        case 0:return 'computer';
        case 2:return 'tie';
    }
}

function restart(){
    const scoreboard = document.querySelector('.scoreboard');
    scores = scoreboard.querySelectorAll('span');
    scores.forEach((e)=> console.log(e.textContent = '0'));
}

function execute(){
    const scorebox = document.querySelector('.scorebox');
    let res = (playMatch(to_num(this.textContent), getComputerChoice()))

    switch(res){
           case 1:{scorebox.querySelector('#winner').textContent = "Player wins!"; break;}
           case 0:{scorebox.querySelector('#winner').textContent ="Computer wins!"; break;}
           case 2:{scorebox.querySelector('#winner').textContent ="Tie!"; break;}
    }

    
    const scoreboard = document.querySelector('.scoreboard');
    if (scorebox.lastChild.tagName === "H3"){
        h3 = document.querySelector('h3');
        h3.remove();
        restart();
    }
    if (set_winner(res) == 'tie') return
    score = scoreboard.querySelector(`#${set_winner(res)}`).querySelector('span')
    score.textContent = +score.textContent + 1;
    if (score.textContent == 5){
        h3 = document.createElement('h3');
        h3.textContent = `${set_winner(res)} wins!`
        scorebox.appendChild(h3);
    }
    
}

const buttons = document.querySelectorAll('.choice')
buttons.forEach((button) => button.addEventListener('click', execute))
