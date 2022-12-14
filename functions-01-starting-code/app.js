const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOISE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WON = "PLAYER_WON";
const RESULT_COMPUTER_WON = "COMPUTER_WON";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOISE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOISE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WON
    : RESULT_COMPUTER_WON;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   cChoice === ROCK && pChoice === PAPER ||
//   cChoice === PAPER && pChoice === SCISSORS ||
//   cChoice === SCISSORS && pChoice === ROCK
// ) {
//   return RESULT_PLAYER_WON;
// } else {
//   return RESULT_COMPUTER_WON;
// }

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Games is starting...");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${
    playerSelection || DEFAULT_USER_CHOISE
  }, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + "had a draw";
  } else if (winner === RESULT_PLAYER_WON) {
    message = message + "won.";
  } else {
    message = message + "lost.";
  }
  alert(message);
  gameIsRunning = false;
});

// Method example
// const person = {
//   name: 'Max',
//   greet: function greet (){
//     console.log('Hello there!');
//   }
// }

// person.greet();

//console.dir(startGame);

//Anonymous function as an expression
// const start = function() {
//   console.log('Game is starting...');
// };

//not related to the game

//Rest operator example
//With a function within a function
//With a callback
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }

  resultHandler(sum);
};

//Arguments example, an alternative to rest operator <<< rest is recommended
// const substracUp = function(resultHandler, ...numbers){
//   let sum = 0;
//   for (const num of numbers){
//     sum -= num;
//   }
//   resultHandler(sum);
// }

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

combine(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  1,
  5,
  "asda",
  -3,
  6,
  10
);
combine(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, "The result after subtracting all numbers is: "),
  "SUBTRACT",
  1,
  10,
  15,
  20
);
