const form = document.querySelector(".login-form");
form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const forElements = event.currentTarget.elements;

  const mail = forElements.email.value;
  const password = forElements.password.value;
  const sabmitForm = {
    mail,
    password,
  };
  if (forElements.email.value === "" || forElements.password.value === "") {
   alert("все поля должны быть заполнены");
  } else {
    console.log(sabmitForm);
    form.reset();}
}


