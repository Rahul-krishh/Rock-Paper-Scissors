let score = JSON.parse(localStorage.getItem('score')) || {
      win : 0,
      lose : 0,
      tie : 0
}

updateScoreElement();    

function playGame(playerMove)
{
  const computerPick = pickComputerMove();

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
  

  document.querySelector('.js-result').innerHTML = `${result}`;
  
  document.querySelector('.js-move').innerHTML = `You picked ${playerMove}&nbsp; <img class="move-result-icon" src="../rock_paper_scissors/images/${playerMove}-emoji.png"> &nbsp;&nbsp;  Computer Picked ${computerPick} &nbsp;<img class="move-result-icon" src="../rock_paper_scissors/images/${computerPick}-emoji.png">`;

  updateScoreElement();
  
  localStorage.setItem('score', JSON.stringify(score));
  
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


function updateScoreElement()
{
  document.querySelector('.js-score').innerHTML = `Win : ${score.win} &nbsp;&nbsp; Lose : ${score.lose} &nbsp;&nbsp; Tie : ${score.tie}`;
}

