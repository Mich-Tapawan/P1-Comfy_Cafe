document.addEventListener("DOMContentLoaded", function () {
  // Hero Section banner images cycle
  let image = document.getElementById('main-tarp');
  let hero = document.querySelector('.hero');
  let images = ['Media/main-spread1.jpg','Media/main-spread2.jpg','Media/main-spread3.jpg'];
  let count = 0;
  let clicked = false;

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

  setInterval(function(){
    //let random = Math.floor(Math.random() * images.length);
    if(count === images.length){
      count = 0;
    }
    image.src = images[count];
    count++}, 5000)

  document.querySelectorAll('.slideButton').forEach(button => {
    button.onclick = () =>{
      if (button.getAttribute( 'id' ) === 'slideLeft'){
        return
      }
      else if (button.getAttribute( 'id' ) === 'slideRight'){
        return
      }
    };
  })
});