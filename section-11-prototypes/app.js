// class Person {
//   name = 'Max';

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log('Hi, I am' + this.name + ' and I am ' + this.age + ' years old.');
//   }
// }

//Old way of writing constructor function

function Person () {
  this.age = 30;
  this.name = 'Max';
  this.greet = function() {
    console.log(
      'Hi, I am' + this.name + ' and I am ' + this.age + ' years old.'
    );
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  }
};

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);