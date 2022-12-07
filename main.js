const words = [
  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili'
];

let palabraAleatoria = "";
let time = 10;
let score = 0;
let randomWord = document.querySelector("#randomWord")


function randomWords() {
  let i = parseInt(Math.random() * 18)
  return palabraAleatoria = words[i]
}

function addToDOM() {

  randomWord.textContent = palabraAleatoria;

}



randomWords();
addToDOM();
console.log(palabraAleatoria);