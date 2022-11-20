const input = document.querySelector(`#name-input`);
const nameSpan = document.querySelector(`#name-output`);

//input.addEventListener(`focus`, onInputFocus);
//input.addEventListener(`blur`, onInputBlur);
//input.addEventListener(`change`, onInputChange);

//function onInputFocus() {console.log("Focus")};
//function onInputBlur() {console.log("neFocusy")};
//function onInputChange(event) { console.log(event.currentTarget.value)};

input.addEventListener(`input`, onInputChange);


function onInputChange(event) {
    nameSpan.textContent = event.currentTarget.value;
    if (nameSpan.textContent === "") { nameSpan.textContent = "Anonymous";};
};