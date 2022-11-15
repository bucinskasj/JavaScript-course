const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDecription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDecription);
}

addBtn.addEventListener("click", add);
