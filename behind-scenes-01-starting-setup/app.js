// Example of var vs. let & const. Block scope
// Block scope is constrained by curly braces

var name = 'Max';
let hobbies;

if (name === 'Max'){
  hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

function greet (){
  var age = 30;
  var name = 'Manuel';
  console.log(name, age, hobbies);
}

console.log(name, hobbies);

greet();


// This kind of block is legal too
// test variable won't be available outside of scope

{
  let test = 5;
  console.log(test);
}

/////////////////Lecture 114///////////////////

// Hoisting example, Let and const forces you to delclare vars before using them
let userName = 'Max';

console.log(userName);