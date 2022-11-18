const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function(){
    alert('Hi there!');
  }
};

delete person.age; //will detele attribute too
// person.age = undefined; //better use null. Devs never assign undefined.
// person.age = null;
person.isAdmin = true;

console.log(person['first name']);
