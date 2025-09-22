let score = JSON.parse(localStorage.getItem('score')) || {
      win : 0,
      lose : 0,
      tie : 0,
}

let lastResult = localStorage.getItem('lastResult') || '';
let lastMove = localStorage.getItem('lastMove') || '';

updateScoreElement();

document.querySelector('.js-result').innerHTML = lastResult;
document.querySelector('.js-move').innerHTML = lastMove;

function playGame(playerMove)
{
  const computerPick = pickComputerMove();
  let result;

  if(playerMove === 'Rock')
  {
    if( computerPick === 'Rock' )
    {
      result = 'Tie.';
    }
    else if( computerPick === 'Paper' )
    {
      result = 'You Lose.';
    }  
    else
    {
      result = 'You Win.';
    }
  }

  else if(playerMove === 'Paper')     
  {
    if( computerPick === 'Rock' )
    {
      result = 'You Win.';
    }
    else if( computerPick === 'Paper' )
    {
      result = 'Tie.';
    }
    else
    {
      result = 'You Lose.';
    }
  }

  else
  {
    if( computerPick === 'Rock' )
    {
      result = 'You Lose.';
    }
    else if( computerPick === 'Paper' )
    {
      result = 'You Win.';
    }
    else
    {
      result = 'Tie.';
    }
  }  

  if( result === 'You Win.' )
  {
    score.win ++;
  }
  else if( result === 'You Lose.' )
  {
    score.lose ++;
  }
  else if( result === 'Tie.' )
  {
    score.tie ++;
  }
  

  lastResult = result;
  lastMove = `You picked ${playerMove}&nbsp; <img class="move-result-icon" src="../rock_paper_scissors/images/${playerMove}-emoji.png"> &nbsp;&nbsp;  Computer Picked ${computerPick} &nbsp;<img class="move-result-icon" src="../rock_paper_scissors/images/${computerPick}-emoji.png">`;

  document.querySelector('.js-result').innerHTML = lastResult;
  document.querySelector('.js-move').innerHTML = lastMove;
  updateScoreElement();
  
  localStorage.setItem('score', JSON.stringify(score));
  localStorage.setItem('lastResult', lastResult);
  localStorage.setItem('lastMove', lastMove);
  
}


function pickComputerMove()
{
  const randomNumber = Math.random();
  let computerPick = '';

  if( 0 <= randomNumber && randomNumber < 1/3 )
  {
    computerPick = 'Rock';
  }
  else if( 1/3 <= randomNumber && randomNumber < 2/3 )
  {
    computerPick = 'Paper';
  }
  else
  {
    computerPick = 'Scissors';  
  }

  return computerPick;
}

let isAutoPlay = false;
let intervalID;
let autoPlayElement = document.querySelector('.js-autoPlay');

function autoPlay() {

  
  if(!isAutoPlay) {
    
    function auto() {
      const computerMove = pickComputerMove();
      playGame(computerMove);
    }
    intervalID = setInterval(auto, 1200);
    isAutoPlay = true;
    autoPlayElement.innerHTML = "Restart Auto Play"

    } else {
      pauseAutoPlay(intervalID);
      isAutoPlay = false;
    }

}

function pauseAutoPlay(ID) {
  clearInterval(ID);
  autoPlayElement.innerText = "Auto Play"
}


function updateScoreElement()
{
  document.querySelector('.js-score').innerHTML = `Win : ${score.win} &nbsp;&nbsp; Lose : ${score.lose} &nbsp;&nbsp; Tie : ${score.tie}`;
}

function resetGame() {
  score.win = 0,
  score.lose = 0,
  score.tie = 0
  
  localStorage.removeItem('score');
  localStorage.removeItem('lastResult');
  localStorage.removeItem('lastMove');
  
  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-move').innerHTML = '';

}
