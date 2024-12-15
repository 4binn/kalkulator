let display = document.getElementById("display");
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
  display.value += number;
}

function setOperation(operation) {
  firstOperand = parseFloat(display.value);
  currentOperation = operation;
  display.value = "";
}

function calculate() {
  let secondOperand = parseFloat(display.value);
  let result;
  switch (currentOperation) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
  }
  display.value = result;
  currentOperation = null;
  firstOperand = null;
}

function clearDisplay() {
  display.value = "";
  currentOperation = null;
  firstOperand = null;
}
