const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDecription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDecription); // from vendor.js file
}

// Adds two numbers together
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog("+", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries[1]);
}

// Subtracts two numbers
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog("-", initialResult, enteredNumber);
}

// Multiplies two numbers
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *=enteredNumber;
  createAndWriteLog("*", initialResult, enteredNumber);
}

// Divides two numbers
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /=enteredNumber;
  createAndWriteLog("/", initialResult, enteredNumber);
}

// Initializing vendor.js functions to interact with the page
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
