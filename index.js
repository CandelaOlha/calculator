let operationNumbers = [];
let result = 0;
const operationText = document.querySelector("#operationText");
const resultText = document.querySelector("#resultText");
const equalButton = document.querySelector("#equalButton");
const allClearButton = document.querySelector("#allClearButton");
const positiveOrNegativeButton = document.querySelector(
  "#positiveOrNegativeButton"
);
const percentageButton = document.querySelector("#percentageButton");

// Display operation

const displayOperation = () => {
  const buttons = document.querySelectorAll(".button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      operationNumbers.push(buttons[i].innerText);
      operationText.textContent = operationNumbers.join("");
    };
  }
};

displayOperation();

// Replace arithmetic operators

const replaceArithmeticOperators = () => {
  for (let i = 0; i < operationNumbers.length; i++) {
    if (operationNumbers[i] === "×") {
      operationNumbers[i] = "*";
    } else if (operationNumbers[i] === "÷") {
      operationNumbers[i] = "/";
    }
  }
};

// Display result

const displayResult = () => {
  if (operationNumbers.length !== 0) {
    replaceArithmeticOperators();
    result = eval(operationNumbers.join(""));
    resultText.textContent = result.toString();
  }
};

equalButton.addEventListener("click", displayResult);

// Reset result

const resetResult = () => {
  operationNumbers = [];
  result = 0;
  operationText.textContent = "";
  resultText.textContent = "0";
};

allClearButton.addEventListener("click", resetResult);

// Make number positive or negative

const makeNumberPositiveOrNegative = () => {
  if (operationNumbers.length !== 0) {
    if (operationNumbers[0] === "-") {
      operationNumbers.shift();
      operationText.textContent = operationNumbers.join("");
    } else if (Number(operationNumbers[0]) >= 0) {
      operationNumbers.unshift("-");
      operationText.textContent = operationNumbers.join("");
    }
  }
};

positiveOrNegativeButton.addEventListener(
  "click",
  makeNumberPositiveOrNegative
);

// Use percentage button

const calculatePercentage = () => {
  console.log("Percentage button was clicked!");
  console.log(operationNumbers);
}

percentageButton.addEventListener("click", calculatePercentage);