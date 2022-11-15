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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }

  // if (
  //   calculationType === 'ADD' || 
  //   calculationType === 'SUBTRACT' ||
  //   calculationType === 'MULTIPLY' ||
  //   calculationType === 'DIVIDE'
  //   )  {

  // }
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// Adds two numbers together
function add() {
  calculateResult("ADD");
}

// Subtracts two numbers
function subtract() {
  calculateResult("SUBTRACT");
}

// Multiplies two numbers
function multiply() {
  calculateResult("MULTIPLY");
}

// Divides two numbers
function divide() {
  calculateResult("DIVIDE");
}

// Initializing vendor.js functions to interact with the page
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
