const score = JSON.parse(localStorage.getItem('score')) ||
                  {
                    wins: 0,
                    losses: 0,
                    ties: 0
  }

//updateScore();

function myGame() {
  const anyNumber = Math.random();
  let computerMove;
  
  if (anyNumber >= 0 && anyNumber < 1/3) {
    computerMove = '✊';
  } else 
     if (anyNumber >= 1/3 && anyNumber < 2/3) {
       computerMove = '🖐';
     } else 
      if (anyNumber >= 2/3 && anyNumber < 1) {
        computerMove = '✌';
      }
      
      return computerMove;
}

function playGame(myMove) {
  
  let computerMove = myGame();
  let result;
  if (myMove === '✊') {
  if (computerMove === '✊') {
    result = 'Ties!';
  } else 
    if (computerMove === '🖐') {
    result = 'You lost!';
  } else 
    if (computerMove === '✌') {
    result = 'You win!';
  }
  } else if (myMove === '🖐') {
      if (computerMove === '✊') {
    result = 'You win!';
  } else 
    if (computerMove === '🖐') {
    result = 'Ties!';
  } else 
    if (computerMove === '✌') {
    result = 'You lost!';
  }
  } else if (myMove === '✌') {
      if (computerMove === '✊') {
    result = 'You lost!';
  } else 
    if (computerMove === '🖐') {
    result = 'You win!';
  } else 
    if (computerMove === '✌') {
    result = 'Ties!';
  }
  }
  
  
  document.querySelector('.js-par')
    .innerHTML = `${result}`;
    document.querySelector('.js-par1')
    .innerHTML = `You <span style="font-size: 80px;">${myMove}</span>, Computer <span style="font-size: 80px;">${computerMove}</span>`;
    
    if (result === 'You win!') {
       score.wins = score.wins + 1;
  } else if (result === 'You lost!') {
       score.losses = score.losses + 1;
  } else if (result === 'Ties!') {
       score.ties = score.ties + 1;
  }
  
  localStorage.setItem('score', JSON.stringify(score));
  
    updateScore();

}

  function updateScore() {
  document.querySelector('.js-par2')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  
  function myReset() {
    score.wins =0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-par')
      .innerHTML = '';
    document.querySelector('.js-par1')
      .innerHTML = '';
      updateScore();
  }



