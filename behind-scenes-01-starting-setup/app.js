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

{
  let test = 5;
  console.log(test);
}