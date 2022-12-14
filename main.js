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
let scoreHTML = document.querySelector("#score");
let randomWord = document.querySelector("#randomWord");
let timeSpan = document.querySelector("#timeSpan");
let timeInterval = setInterval(actualizarTiempo, 1000);
let palabraIngresada = document.querySelector("input");

document.querySelector("input").addEventListener('keyup', function () {

  let input = palabraIngresada.value



  if (input === palabraAleatoria) {
    time += 3;
    palabraIngresada.value = "";
    updateScore();
    randomWords();
    addToDOM();
    console.log("PROBANDO");
  }
  return console.log(palabraIngresada.value);
})

function randomWords() {
  let i = parseInt(Math.random() * 18)
  return palabraAleatoria = words[i]
}

function addToDOM() {
  randomWord.textContent = palabraAleatoria;
}

function actualizarTiempo() {
  if (time === 0) {
    clearInterval(timeInterval)
  } else {
    time -= 1;
    timeSpan.textContent = time + "s";
  }
}

function updateScore() {
  score += 1;
  scoreHTML.textContent = score;
}

actualizarTiempo();
randomWords();
addToDOM();

