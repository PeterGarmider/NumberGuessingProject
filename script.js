let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()* 9);

let compareGuesses = (currentHumanGuess, computerGuess, target) => {

  if (currentHumanGuess <= 9 && currentHumanGuess >= 0) {

    if (getAbsoluteDistance(currentHumanGuess, target) > getAbsoluteDistance(computerGuess, target)) {
      //computer wins
      return false;
    }
    else if (getAbsoluteDistance(currentHumanGuess, target) < getAbsoluteDistance(computerGuess, target)) {
      //human wins
      return true;
    }
    else {
      //computer and human is equal, but human wins by default
      return true;
    }
  }
  else alert('Number out of range!');
};

let updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  }
  else if (winner === 'computer') {
    computerScore += 1;
  }
};

let advanceRound = () => {
  currentRoundNumber += 1;
};

let getAbsoluteDistance = (val1, val2) => {
  return Math.abs(val1 - val2);
};
