
const elements = document.querySelectorAll(".item");
const elemen = elements.length;
console.log(`Number of categories: ${elemen}`);
elements.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  const elChildren = element.children[1];
    const descendant = elChildren.children;
  console.log("Elements:", descendant.length);
});