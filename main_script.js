document.addEventListener("DOMContentLoaded", function () {
  // Hero Section banner images cycle
  let image = document.getElementById('main-tarp');
  let images = ['Media/main-spread1.jpg','Media/main-spread2.jpg','Media/main-spread3.jpg']
  
  setInterval(function(){
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random]}, 5000)
});