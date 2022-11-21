// Pure functions are predictable, no side effects
function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {} //naming is important

console.log(add(1, 5)); // 6
console.log(add(12, 15)) // 27

//Impure function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5)); //always 5 + random

//Another impure function
let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; // side effect
  return sum;
}

console.log(addMoreNumbers(1, 5));

// And another impure function
const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY'); // side effect
  console.log(h);
}

printHobbies(hobbies);

// Factory functions - function that produces another function

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
};

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// Closures

let userName = 'Max';

function greetUser() {
  // let name = 'Anna';
  console.log('Hi ' + name)
};

let name = 'Maximilian';

userName = 'Manuel';

greetUser();