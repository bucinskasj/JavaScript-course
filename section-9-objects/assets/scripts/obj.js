//File not being called in index.html

const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: 'value',
  greet: function(){
    alert('Hi there!');
  },
  1.5: 'hello'
};

delete person.age; //will detele attribute too
// person.age = undefined; //better use null. Devs never assign undefined.
// person.age = null;
person.isAdmin = true;

const keyName = 'first name';

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);
