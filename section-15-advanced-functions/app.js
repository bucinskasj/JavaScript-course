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

// Recursion

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i<n; i++) {
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n -1);

  return n === 1 ? x : x * powerOf(x, n -1);
}

console.log(powerOf(2, 3)); // 2*2*2

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Robert'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia',
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));