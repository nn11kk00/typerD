const words=['californication','plataforma5','black','summer','flea','aeroplane','peppers','unlimited','arcadium','love','getaway','stadium','quarter','snow','dylan','zephyr','funky','chili','que','de','no','a','la','el','es','y','en','hubiese','bebe','tanta','oeste','rose','necesidad','naves','descubrir','tira','resolver''sufrir','mental','lograr','instituto','um','serlo','rapido','plato','llorando','vd','rutina','gustar','empieces','lleguemos','interrumpir','haberla','apropiado','presentimiento','intentamos','finales','evitar',];

let palabraAleatoria = "";
let time = 10;
let score = 0;
let scoreHTML = document.querySelector("#score");
let randomWord = document.querySelector("#randomWord");
let timeSpan = document.querySelector("#timeSpan");
let timeInterval = setInterval(actualizarTiempo, 1000);
let palabraIngresada = document.querySelector("input");
let numerosWords = words.length - 1;

document.querySelector("input").addEventListener('keyup', function () {

  let input = palabraIngresada.value



  if (input === palabraAleatoria) {
    time += 1;
    palabraIngresada.value = "";
    updateScore();
    randomWords();
    addToDOM();
    console.log("PROBANDO");
  }
  return console.log(palabraIngresada.value);
})

function randomWords() {
  let i = parseInt(Math.random() * numerosWords)
  return palabraAleatoria = words[i]
}

function addToDOM() {
  randomWord.textContent = palabraAleatoria;
}

function actualizarTiempo() {
  if (time === 0) {
    clearInterval(timeInterval)

    alert("Se te termino el tiempo!!")
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

