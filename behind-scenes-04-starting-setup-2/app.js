// function getName(){
//   return prompt('Your name', '')
// }

// function greet(){
//   const userName = getName();
//   console.log('Hello ' + userName);
// }

// greet();

const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

// Will be cleaned up with GC
function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

// won't be cleaned by GC
function addListener() {
  clickableBtn.addEventListener('click', function () {
    const value = messageInput.value;
    console.log(value || 'Clicked me!');
  });
}

addListenerBtn.addEventListener('click', addListener);