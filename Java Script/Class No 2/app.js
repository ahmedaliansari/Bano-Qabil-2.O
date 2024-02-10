let output = document.getElementById("output");
let operator = "";
let operand1 = "";
let operand2 = "";
let isOperatorSet = false;

function appendToOutput(value) {
  if (output.innerText === "0" || isOperatorSet) {
    output.innerText = value;
    isOperatorSet = false;
  } else {
    output.innerText += value;
  }
}

function setOperator(selectedOperator) {
  if (operand1 === "") {
    operand1 = output.innerText;
  } else {
    operand2 = output.innerText;
    operand1 = operate(
      operator,
      parseFloat(operand1),
      parseFloat(operand2)
    ).toString();
  }

  operator = selectedOperator;
  isOperatorSet = true;
}

function addDecimalPoint() {
  if (!output.innerText.includes(".")) {
    output.innerText += ".";
  }
}

function calculateResult() {
  if (operand1 !== "" && operator !== "" && !isOperatorSet) {
    operand2 = output.innerText;
    output.innerText = operate(
      operator,
      parseFloat(operand1),
      parseFloat(operand2)
    );
    operand1 = output.innerText;
    operand2 = "";
    operator = "";
    isOperatorSet = true;
  }
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b !== 0) {
        return a / b;
      } else {
        return "Error";
      }
    default:
      return "Error";
  }
}

function clearOutput() {
  output.innerText = "0";
  operator = "";
  operand1 = "";
  operand2 = "";
  isOperatorSet = false;
}
