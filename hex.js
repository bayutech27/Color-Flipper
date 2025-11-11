//Referencing the ID and classes

let body = document.querySelector('body');

let colorName = document.querySelector('.color-name');

const  getColor = document.querySelector('#btn');



// Setting mixture of letters and numbers array 

const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


 
 
 
 
 
getColor.addEventListener('click', function () {
 let colors = '#';
 
 for (i = 0; i < 6; i++){
 
 let randomNumber = Math.floor(Math.random() * hexColor.length);
 
     
  colors += hexColor[randomNumber];
 
 };
 
 
 document.body.style.backgroundColor = colors;
  
  colorName.textContent = colors;
  
    
});

