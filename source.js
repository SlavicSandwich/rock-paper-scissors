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

function restart(endgame){
    const scoreboard = document.querySelector('.scoreboard');
    const scorebox = document.querySelector('.scorebox');
    if (endgame) {
        h3 = document.querySelector('h3');
        h3.textContent = '';
    }
    
    scorebox.querySelector('#winner').textContent = '';
    scores = scoreboard.querySelectorAll('span');
    scores.forEach((e)=> e.textContent = '0');
        
}
function stopShake(e){
    e.target.classList.remove('shake')
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
    console.log(scorebox.querySelector('h3'))
    if (scorebox.querySelector('h3').textContent != ''){
        restart(1)
    }
    if (set_winner(res) == 'tie') return
    score = scoreboard.querySelector(`#${set_winner(res)}`).querySelector('span')
    score.parentNode.parentNode.classList.add('shake');
    score.textContent = +score.textContent + 1;
    if (score.textContent == 5){
        h3 = document.querySelector('h3');
        h3.textContent = `${set_winner(res)} wins!`
    }
}
const restart_button = document.querySelector('.restart')
restart_button.addEventListener('click', ()=>{restart(0)});
const buttons = document.querySelectorAll('.choice')
buttons.forEach((button) => button.addEventListener('click', execute))
const scoretexts= document.querySelectorAll('.score');
scoretexts.forEach(score=>score.addEventListener('animationend', stopShake))