let displayValue = "";
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;

function appendNumber(number) {
  if (shouldResetDisplay) {
    displayValue = number;
    shouldResetDisplay = false;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function chooseOperator(operator) {
  if (currentOperator !== null) calculate();
  firstOperand = parseFloat(displayValue);
  currentOperator = operator;
  shouldResetDisplay = true;
}

function calculate() {
  if (currentOperator === null || shouldResetDisplay) return;
  secondOperand = parseFloat(displayValue);
  switch (currentOperator) {
    case "+":
      displayValue = firstOperand + secondOperand;
      break;
    case "-":
      displayValue = firstOperand - secondOperand;
      break;
    case "*":
      displayValue = firstOperand * secondOperand;
      break;
    case "/":
      displayValue = firstOperand / secondOperand;
      break;
  }
  currentOperator = null;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  shouldResetDisplay = false;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
