const znac = document.querySelector("#font-size-control");
let text = document.querySelector(`#text`);
znac.addEventListener(`input`, znacPolz);


function znacPolz(event) {
  const range = event.currentTarget.value;
    text.style.fontSize = `${range}px`;
    
};