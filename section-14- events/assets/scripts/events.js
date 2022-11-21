const button = document.querySelector('button');

// button.onclick = function () {};

const onButtonClick = () => {
  alert('Button was clicked');
};

const anotherButtonClick = () => {
  console.log('This was clicked!');
};

// button.onclick = onButtonClick;
// button.onclick = anotherButtonClick; // above function is overriden

const boundFn = onButtonClick.bind(this);

button.addEventListener('click', boundFn);

setTimeout(() => {
  button.removeEventListener('click', boundFn);
}, 2000);
