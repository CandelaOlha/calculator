let operationNumbers = [];
let result = 0;
const operationText = document.querySelector("#operationText");
const resultText = document.querySelector("#resultText");
const equalButton = document.querySelector("#equalButton");
const allClearButton = document.querySelector("#allClearButton");

// Display operation

const displayOperation = () => {
  const buttons = document.querySelectorAll(".button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      if (buttons[i].innerText === "×") {
        operationNumbers.push("*");
      } else if (buttons[i].innerText === "÷") {
        operationNumbers.push("/");
      } else {
        operationNumbers.push(buttons[i].innerText);
      }

      operationText.textContent = operationNumbers.join("");
    };
  }
};

displayOperation();

// Display result

const displayResult = () => {
  if (operationNumbers.length !== 0) {
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
