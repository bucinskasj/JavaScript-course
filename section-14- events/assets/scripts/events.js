const buttons = document.querySelectorAll('button');

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