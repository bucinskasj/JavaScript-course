const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredValue = prompt("Maximum life for you and the monster.", "100");

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let curretPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry;
  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry = {
        event: event,
        value: value,
        target: "MONSTER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event: event,
        value: value,
        target: "MONSTER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: event,
        value: value,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event: event,
        value: value,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    default:
      logEntry = {};
  }

  // if (event === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     target: "MONSTER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     target: "MONSTER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (event === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     target: "PLAYER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (event === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     target: "PLAYER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (event === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  curretPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = curretPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  curretPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    curretPlayerHealth
  );

  if (curretPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    curretPlayerHealth = initialPlayerHealth;
    alert("You would be dead but the bonus life saved you!");
    setPlayerHealth(initialPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && curretPlayerHealth > 0) {
    alert("You won!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER_WON",
      currentMonsterHealth,
      curretPlayerHealth
    );
    reset();
  } else if (curretPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      currentMonsterHealth,
      curretPlayerHealth
    );
    reset();
  } else if (curretPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW",
      currentMonsterHealth,
      curretPlayerHealth
    );
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  // The above constants use Ternany operators to get rid of the
  // below if statement
  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, curretPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (curretPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't overheal, sadge.");
    healValue = chosenMaxLife - curretPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  curretPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    curretPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  for (let i = 0; i< 3; i++){
    console.log('--------');
  }

  // For loop with decrementing values
  // for(let i = 10; i > 0;){
  //   i--;
  //   console.log(i);
  // }

  // For loop to go through each element in the array
  // for (let i = 0; i < battleLog.length; i++){
  //   console.log(battleLog[i]);
  // }

  // "For Of" loop to go through each element in the array
  let i = 0;
  for (const logEntry of  battleLog) {
    console.log(`#${i}`);
    for (const key in logEntry){
      console.log(`${key} => ${logEntry[key]}`);
    }
    i++;
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
