class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = "Max";

  constructor() {
    // super();
    this.age = 30;
    // this.greet = function() { ... }
  }

  //No binds required to call evenlisteners
  // greet = () => {
  //   console.log('Hi, I am' + this.name + ' and I am ' + this.age + ' years old.');
  // };

  //Would require bind() to bind to the event listener
  greet() {
    console.log(
      "Hi, I am" + this.name + " and I am " + this.age + " years old."
    );
  }
}

//Old way of writing constructor function

// function Person () {
//   this.age = 30;
//   this.name = 'Max';
//   // this.greet = function() { ... };

// }

// Person.prototype.greet = function() {
//   console.log(
//     'Hi, I am' + this.name + ' and I am ' + this.age + ' years old.'
//   );
// };
// Person.describe = function() {
//   console.log('Creating persons');
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.log(p2);

// console.dir(Object.prototype.__proto__);

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p)); //non-arrow functions

const course = {
  title: "JavaScript - the Complete Guide",
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
}, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Max',
    writable: true
  }
});

// student.name = 'Max';


Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

console.log(student);

student.printProgress();

// console.log(course.__proto__);

course.printRating();
