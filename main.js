const name='Mariola';
console.log(name);
const age="32";
console.log(age);

let ishappy='false';
console.log(false);


const header = document.querySelector('h1')
console.log(header)
console.log(header.style)
header.style.color='red';

const section = document.querySelector(`.page__header--js`)
section.innerHTML = `Nazywam się ${name} i mam ${age} laaata. czas na zmiany:D`

const contentJS = document.querySelector(`.abouthtml__content--js`)
contentJS.innerHTML =  `ten dokument jest wypelniony JS`

const conJS = document.querySelector(`.abouthtml__content--jsa`)
conJS.innerHTML = "dlaczego tu dziala a tam nie"

const conJSA = document.querySelector(`.abouthtml__content--jsas`)
conJSA.innerHTML ="BAKSIO BAKSIO BAKSIO"