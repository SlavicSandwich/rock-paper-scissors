function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

// function getPlayerChoice() {
//   const choice = prompt("What's your choice?").toLowerCase();
//   switch (choice){
//     case 'rock':
//         return 0;
//     case 'paper':
//         return 1;
//     case 'scissors':
//         return 2;
//     default:
//         return null;
//   }
// }

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
            return "✊";
        case 1:
            return "✋";
        case 2:
            return "✌"
    }
}

function to_num(choice){
    switch(choice){
        case '✊':
            return 0;
        case '✋':
            return 1;
        case "✌":
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
    scorebox.querySelector('#winner').textContent = '';
    scores = scoreboard.querySelectorAll('span');
    scores.forEach((e)=> e.textContent = '0');
        
}
function stopShake(e){
    e.target.classList.remove('shake')
}
function execute(){
    const scorebox = document.querySelector('.scorebox');


    const playerChoice = to_num(this.textContent);
    const computerChoice = getComputerChoice();
    let res = (playMatch(playerChoice, computerChoice));

    scorebox.querySelector("#player").querySelector('.sign').textContent = to_string(playerChoice);
    scorebox.querySelector("#computer").querySelector('.sign').textContent = to_string(computerChoice);


    switch(res){
           case 1:{scorebox.querySelector('.score-info').textContent = "Player wins!"; break;}
           case 2:{scorebox.querySelector('.score-info').textContent ="Tie!"; break;}
           case 0:{scorebox.querySelector('.score-info').textContent ="Computer wins!"; break;}
    }

    if (set_winner(res) != 'tie'){
        score = scorebox.querySelector(`#${set_winner(res)}`).querySelector('span');
        score.textContent = +score.textContent + 1;
    }
}
const restart_button = document.querySelector('.restart')
restart_button.addEventListener('click', ()=>{restart(0)});
const buttons = document.querySelectorAll('.choice')
buttons.forEach((button) => button.addEventListener('click', execute))