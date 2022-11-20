const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',];


 const newList = ingredients.map((ingredient) => {
  const heading = document.createElement("li");
  heading.textContent = ingredient;
  heading.classList.add(`item`);
  return heading;
 });

const ule = document.querySelector("#ingredients");
ule.append(...newList);
console.log(ule);
