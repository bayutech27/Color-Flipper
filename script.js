//Referencing the ID and classes

let body = document.querySelector('body');

const burgerButton = document.querySelector('#burger-button');

let colorName = document.querySelector('.color-name');

const prev = document.querySelector('#btn1');

const next = document.querySelector('#btn2');


let colors = ['whitesmoke', 'yellow', 'navy', 'blue', 'gold', 'goldenrod', 'black', 'white', 'aqua', 'green', 'red', 'maroon', 'skyBlue', 'gray', 'lightGray', 'slateGray', 'teal', 'lightBlue', 'brown', 'aliceblue', 'fireBrick', 'crimson', 'pink', 'hotPink', 'snow', 'deepPink', 'tomato', 'coral', 'orange', 'khaki', 'darkKhaki', 'lavender', 'purple', 'azure', 'violet', 'plum', 'papayaWhip', 'fuchsia', 'lime', 'ghostWhite', 'limeGreen', 'yellowGreen', 'stealBlue', 'royalBlue', 'tan', 'wheat', 'cornsilk', 'chocolate', 'honeyDew', 'mintCream'];


let count = 0;


next.addEventListener('click', function(){
    
    count +=1 % colors.length;
    
   document.body.style.backgroundColor = colors[count];
   
colorName.textContent = colors[count];
     
     if (count === colors.length - 1) {
         
         return count = 0;
     };
});


prev.addEventListener('click', function () {
    
  count -=1;
  document.body.style.backgroundColor = colors[count];  
  
  colorName.textContent = colors[count];
    
      if (count === 0) {
         
         count = colors.length;
     };
});

