let userScore = 0;
let cpuScore = 0;
let closeBtn;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
// const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById("restart");
const result = document.getElementById ("result")
const modal = document.querySelector(".modal");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const getCpuChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

const win = (userChoice, cpuChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-win">You win!</h1> <p>Computer choose <strong>${cpuChoice}</strong></p>`;
  modal.style.display = 'flex';
}

const lose = (userChoice, cpuChoice) => {
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-lose">You lost</h1> <p>Computer choose <strong>${cpuChoice}</strong></p>`;
  modal.style.display = 'flex'
}

const draw = (userChoice, cpuChoice) => {
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1>It's a draw</h1> <p>You both choose <strong>${cpuChoice}</strong></p>`;
  modal.style.display = 'flex'
}


const play = (userChoice) => {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, cpuChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, cpuChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, cpuChoice);
      break;
  }
}

const main = () => {
  rock_div.addEventListener('click', () => play('rock'));
  paper_div.addEventListener('click', () => play('paper'));
  scissors_div.addEventListener('click', () => play('scissors'));
}

const clearModal = (e) => {
  closeBtn = document.querySelector('.close');

  if(e.target == modal) {
    modal.style.display = "none"
  }
  else if(closeBtn){
    closeBtn.addEventListener('click', function(){
      modal.style.display = "none"
    });
  }
}

const restartGame = () => {
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();