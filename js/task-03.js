const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galImeg = images.map((imag) => {
const lie = document.createElement('li');
lie.style.marginRight = "10px";
lie.insertAdjacentHTML("beforeend",`<img src = ${imag.url} alt = ${imag.alt} width = 500 height = 300>`);
console.log(lie);
return lie;
});

const ule = document.querySelector(".gallery");
ule.style.display = 'flex';
ule.append(...galImeg);
console.log(ule);
