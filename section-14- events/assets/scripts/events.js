const button = document.querySelector('button');

// button.onclick = function () {};

const onButtonClick = event => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClick = () => {
  console.log('This was clicked!');
};

// button.onclick = onButtonClick;
// button.onclick = anotherButtonClick; // above function is overriden

const boundFn = onButtonClick.bind(this);

// button.addEventListener('click', onButtonClick);

// setTimeout(() => {
//   button.removeEventListener('click', onButtonClick);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', onButtonClick);
// })

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div')

div.addEventListener('click', event => {
  console.log('Clicked DIV');
  console.log(event);
});

button.addEventListener('click', function(event) {
  event.stopPropagation();
  // event.stopImmediatePropagation(); // prevents event propagation on the button element
  console.log('Clicked BUTTON');
  console.log(event);
  console.log(this);
});


const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', function(event) {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();
  button.click();
  console.log(this);
 });