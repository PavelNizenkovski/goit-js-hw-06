let input = document.querySelector(`#validation-input`);

//input.addEventListener(`focus`, onInputFocus);
//input.addEventListener(`blur`, onInputBlur);
//input.addEventListener(`change`, onInputChange);

//function onInputFocus() {console.log("Focus")};
//function onInputBlur() {console.log("neFocusy")};
//function onInputChange(event) { console.log(event.currentTarget.value)};

input.addEventListener(`change`, onInputChange);

function onInputChange(event) {
    const inputLength = event.currentTarget.value;
    if (inputLength.length === 6) {
        input.classList.add(`valid`);
        input.classList.remove("invalid");
    } else if (inputLength.length !== 6) {
        input.classList.add(`invalid`);
        input.classList.remove("valid");
    } };

