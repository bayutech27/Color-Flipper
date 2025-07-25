
// Step 1: create a const variable for the colors

const colors = ['Maroon', 'Azure', 'Aqua', 'LightSlateGray', 'Gold', 'Purple', 'Lime', 'Green', 'Blue', 'Red', 'SteelBlue', 'SkyBlue', 'Navy', 'Tan', 'Teal', 'RebeccaPurple', 'Lavender', 'DarkKhaki', 'Orange', 'Yellow', 'Pink', 'Fuchsia', 'Brown', 'Black', 'Whitesmoke', 'Gray', 'Silver', 'Slategray', 'HoneyDew'];


// TStep 2: target button and color names

const button = document.getElementById('button');
const color = document.querySelector('.color');


// Step 3: create event listener for button click

button.addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  
  document.body.style.backgroundColor = colors[randomNumber];
  
  color.textContent = colors[randomNumber];
});