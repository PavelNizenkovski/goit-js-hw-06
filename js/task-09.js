
const clikButton = document.querySelector(`.change-color`);
const nameSpan = document.querySelector(`.color`);

clikButton.addEventListener(`click`, colorBody);

function colorBody() { 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;};
  document.body.style.backgroundColor = getRandomHexColor();
  nameSpan.textContent = getRandomHexColor();
};





