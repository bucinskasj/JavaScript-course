const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}

startGameBtn.addEventListener('click', startGame);


const person = {
  name: 'Max',
  greet: function greet (){
    console.log('Hello there!');
  }
}

person.greet();