document.addEventListener("DOMContentLoaded", function () {
  // Hero Section banner images cycle
  let image = document.getElementById('main-tarp');
  let hero = document.querySelector('.hero');
  let images = ['Media/main-spread1.jpg','Media/main-spread2.jpg','Media/main-spread3.jpg'];
  let count = 0;

  // Display slider buttons on hover
  hero.onmouseover = () => {
      document.querySelectorAll('.slideButton').forEach(button =>{
      button.style.display = 'block';
    })
  }

  hero.onmouseleave = () => {
      document.querySelectorAll('.slideButton').forEach(button =>{
      button.style.display = 'none';
    })
  }

  let intervalID = setInterval(function(){
    if(count === images.length){
      count = 0;
    }
    image.src = images[count];
    count++;}, 5000);
  
  // Sliding functions on click
  document.querySelectorAll('.slideButton').forEach(button => {
    button.onclick = () =>{
      //vs code local port = http://127.0.0.1:5500/
      switch(image.src){
        case 'https://mich-tapawan.github.io/P1-Comfy_Cafe/Media/main-spread1.jpg':
          count = 0;
          break;
        case 'https://mich-tapawan.github.io/P1-Comfy_Cafe/Media/main-spread2.jpg':
          count = 1;
          break;
        case 'https://mich-tapawan.github.io/P1-Comfy_Cafe/Media/main-spread3.jpg':
          count = 2;
          break;
      }

      clearInterval(intervalID);
      if (button.getAttribute( 'id' ) === 'slideLeft'){
        if(count === 0){
          count = 2;
        }
        else{
          count--
        }
      }
      else if (button.getAttribute( 'id' ) === 'slideRight'){
        if(count === 2){
          count = 0;
        }
        else{
          count++
        }
      }
      image.src = images[count];
    };
  })
});