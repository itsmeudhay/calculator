
// Theme
const colour = document.getElementById('colour');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}


colour.addEventListener('click', () => {
  const rndmclr = 'linear-gradient('+ random(360) + 'deg, rgb(255, ' + random(255) + ', ' + random(255) + '), rgb(255, ' + random(255) + ', ' + random(255) + '))';
  document.body.style.background = rndmclr;
  document.getElementById('colour').style.background = rndmclr;
});


// Calculator 
let result = document.getElementById("result");

function clearScreen() {
    result.value = "";
}

function display(value) {
    result.value = result.value + value;
}


function calculate() {
    let express = result.value;
    let answer = eval(express);
    result.value = answer;
}
