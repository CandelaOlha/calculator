let operationNumbers = [];
let result = 0;
const operationText = document.querySelector("#operationText");
const resultText = document.querySelector("#resultText");
const equalButton = document.querySelector("#equalButton");

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

// Display result

const displayResult = () => {
  result = eval(operationNumbers.join(""));
  resultText.textContent = result.toString();
};

equalButton.addEventListener("click", displayResult);
