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

const greet = (name, age) => {
    const result = `Witaj ${name} Masz ${age} lat! `;
    return result;
}
const greeting = greet (`Mariola`, 32);
console.log(greeting);
console.log(greet(`Karolina`,34));

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed `)
    },
    isOperating: true,
    levels:357,
    name: `Death Star`,
    population: 1000,
    commander: {
        name:`darth vader`
    }
}

deathStar.fire(`alderaan`)
deathStar.fire(`Mileeeenaaaaa`)

console.log(deathStar[`levels`])
console.log(deathStar.commander.name)



