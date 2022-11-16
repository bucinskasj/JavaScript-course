const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const enteredValue = prompt('Maximum life for you and the monster.', '100');

let chosenMaxLife = parseInt(enteredValue);

if(isNaN(chosenMaxLife) || chosenMaxLife <=0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let curretPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset(){
  currentMonsterHealth = chosenMaxLife;
  curretPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = curretPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  curretPlayerHealth -= playerDamage;

  if (curretPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    curretPlayerHealth = initialPlayerHealth;
    alert('You would be dead but the bonus life saved you!');
    setPlayerHealth(initialPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && curretPlayerHealth > 0) {
    alert("You won!");
    reset();
  } else if (curretPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
    reset();
  } else if (curretPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
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
  increasePlayerHealth(HEAL_VALUE);
  curretPlayerHealth += HEAL_VALUE;
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
