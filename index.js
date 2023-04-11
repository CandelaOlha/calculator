let operation = "";
const operationText = document.querySelector("#operationText");

const displayOperation = () => {
  const buttons = document.querySelectorAll(".button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      operation += buttons[i].innerText;
      operationText.textContent = operation;
    };
  }
};

displayOperation();
