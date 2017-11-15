// All code should be written in this file.

// Global variables
// Player One
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
// Player Two
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  //Check edge cases: all the entered values need to be valid before the function proceeds
  let validInput = true;
  let sumValues = (moveOneValue + moveTwoValue + moveThreeValue);
  if (player !== 'Player One' && player !== 'Player Two') {
    validInput = false;
  }
  if (!moveOneType || !moveTwoType || !moveThreeType) {
    validInput = false;
  }
  if (!moveOneValue || !moveTwoValue || !moveThreeValue) {
    validInput = false;
  }
  if (moveOneType !== 'paper' && moveOneType !== 'rock' && moveOneType != 'scissors') {
    validInput = false;
  }
  if (moveTwoType !== 'paper' && moveTwoType !== 'rock' && moveTwoType !== 'scissors') {
    validInput = false;
  }
  if (moveThreeType !== 'paper' && moveThreeType !== 'rock' && moveThreeType !== 'scissors') {
    validInput = false;
  }
  if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) {
    validInput = false;
  }
  if (moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99) {
    validInput = false;
  }
  if (sumValues > 99) {
    validInput = false;
  }

  if (!validInput) {
    return;
  }
  else {
    if (player === 'Player One') {
      playerOneMoveOneType = moveOneType;
      playerOneMoveOneValue = moveOneValue;
      playerOneMoveTwoType = moveTwoType;
      playerOneMoveTwoValue = moveTwoValue;
      playerOneMoveThreeType = moveThreeType;
      playerOneMoveThreeValue = moveThreeValue;
    }
    else if (player === 'Player Two') {
      playerTwoMoveOneType = moveOneType;
      playerTwoMoveOneValue = moveOneValue;
      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveTwoValue = moveTwoValue;
      playerTwoMoveThreeType = moveThreeType;
      playerTwoMoveThreeValue = moveThreeValue;
    }
  }

};

const getRoundWinner = (round) => {
  // check edge cases
  let validInput = true;

  if (round === 1) {
    if ((playerOneMoveOneType == undefined) || (playerOneMoveOneValue == undefined) || (playerTwoMoveOneType == undefined) || (playerTwoMoveOneValue == undefined)) {
      validInput = false;
    }

  } else if (round === 2) {
    if ((playerOneMoveTwoType == undefined) || (playerOneMoveTwoValue == undefined) || (playerTwoMoveTwoType == undefined) || (playerTwoMoveTwoValue == undefined)) {
      validInput = false;
    }
  } else if (round === 3) {
    if ((playerOneMoveThreeType == undefined) || (playerOneMoveThreeValue == undefined) || (playerTwoMoveThreeType == undefined) || (playerTwoMoveThreeValue == undefined)) {
      validInput = false;
    }

  }
  else {
    validInput = false;
  }

  if (!validInput) {
    return null;
  }
  else {
    // functionality here
    if (round === 1) {
      if (playerOneMoveOneType === playerTwoMoveOneType) {
        if (playerOneMoveOneValue === playerTwoMoveOneValue) {
          return 'Tie';
        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
          return 'Player One';
        }
        else {
          return 'Player Two';
        }
      }
      else if (playerOneMoveOneType === 'rock') {
        if (playerTwoMoveOneType === 'paper') {
          return 'Player Two';
        } else {
          return 'Player One';
        }
      }
      else if (playerOneMoveOneType === 'paper') {
        if (playerTwoMoveOneType === 'rock') {
          return 'Player One';
        }
        else {
          return 'Player Two';
        }
      }
      else {
        if (playerTwoMoveOneType === 'rock') {
          return 'Player Two';
        }
        else {
          return 'Player One';
        }
      }
    }
    else if (round === 2) {
      if (playerOneMoveTwoType === playerTwoMoveTwoType) {
        if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
          return 'Tie';
        }
        else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
          return 'Player One';
        }
        else {
          return 'Player Two';
        }
      }
      else if (playerOneMoveTwoType === 'rock') {
        if (playerTwoMoveTwoType === 'paper') {
          return 'Player Two';
        }
        else {
          return 'Player One';
        }
      }
      else if (playerOneMoveTwoType === 'paper') {
        if (playerTwoMoveTwoType === 'rock') {
          return 'Player One';
        }
        else {
          return 'Player Two';
        }
      }
      else {
        if (playerTwoMoveTwoType === 'rock') {
          return 'Player Two';
        }
        else {
          return 'Player One';
        }
      }

    }
    else {
      if (playerOneMoveThreeType === playerTwoMoveThreeType) {
        if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
          return 'Tie';
        }
        else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return 'Player One';
        }
        else {
          return 'Player Two';
        }
      }
      else if (playerOneMoveThreeType === 'rock') {
        if (playerTwoMoveThreeType === 'paper') {
          return 'Player Two';
        }
        else {
          return 'Player One';
        }
      }
      else if (playerOneMoveThreeType === 'paper') {
        if (playerTwoMoveThreeType === 'rock') {
          return 'Player One';
        }
        else {
          return 'Player Two';
        }
      }
      else {
        if (playerTwoMoveThreeType === 'rock') {
          return 'Player Two';
        }
        else {
          return 'Player One';
        }
      }
    }
  }
};

const getGameWinner = () => {
  let firstRoundWinner = getRoundWinner(1);
  let secondRoundWinner = getRoundWinner(2);
  let thirdRoundWinner = getRoundWinner(3);
  // check edge cases
  if ((firstRoundWinner == null) || (secondRoundWinner == null) || (thirdRoundWinner == null)) {
    return null;
  }
  else {
    // functionality here
    let playerOneWins = 0;
    let playerTwoWins = 0;
    if (firstRoundWinner === 'Player One') {
      playerOneWins++;
    }
    else if (firstRoundWinner === 'Player Two') {
      playerTwoWins++;
    }
    if (secondRoundWinner === 'Player One') {
      playerOneWins++;
    }
    else if (secondRoundWinner === 'Player Two') {
      playerTwoWins++
    }
    if (thirdRoundWinner === 'Player One') {
      playerOneWins++;
    }
    else if (thirdRoundWinner === 'Player Two') {
      playerTwoWins++;
    }
    if (playerOneWins > playerTwoWins) {
      return 'Player One';
    }
    else if (playerOneWins < playerTwoWins) {
      return 'Player Two';
    }
    else {
      return 'Tie';
    }
  }
};

const setComputerMoves = () => {
  // set player two's move types
  let randomMoveOne = Math.floor(Math.random()*3);
  let randomMoveTwo = Math.floor(Math.random()*3);
  let randomMoveThree = Math.floor(Math.random()*3);

  if (randomMoveOne === 0) {
    playerTwoMoveOneType = 'rock';
  }
  else if (randomMoveOne === 1) {
    playerTwoMoveOneType = 'paper';
  }
  else {
    playerTwoMoveOneType = 'scissors';
  }

  if (randomMoveTwo === 0) {
    playerTwoMoveTwoType = 'rock';
  }
  else if (randomMoveTwo === 1) {
    playerTwoMoveTwoType = 'paper';
  }
  else {
    playerTwoMoveTwoType = 'scissors';
  }

  if (randomMoveThree === 0) {
    playerTwoMoveThreeType = 'rock';
  }
  else if (randomMoveThree === 1) {
    playerTwoMoveThreeType = 'paper';
  }
  else {
    playerTwoMoveThreeType = 'scissors';
  }

// set player two's move values
  let max = 97;
  playerTwoMoveOneValue = Math.floor(Math.random()*max + 1);
  max = 99 - playerTwoMoveOneValue - 1;
  playerTwoMoveTwoValue = Math.floor(Math.random()*max + 1);
  playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;

};
