
// Step 1: create a const variable for the hex

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 7, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


// Step 2: target button and color names

const button = document.getElementById('button');
const color = document.querySelector('.color');


// Step 3: create event listener, function, loop for button click

button.addEventListener('click', function() {

let hexColor = '#';

  
for (i = 0; i < 6; i++) {

const randomNumber = Math.floor(Math.random() * hex.length);

 hexColor += hex[randomNumber];
  }
  
  document.body.style.backgroundColor = hexColor;
  
  color.textContent = hexColor;
});