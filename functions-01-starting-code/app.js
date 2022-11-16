const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOISE = ROCK;

let gameIsRunning = false;


const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOISE} for you!`);
    return DEFAULT_USER_CHOISE;
  }
  return selection;
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log("Games is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
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
