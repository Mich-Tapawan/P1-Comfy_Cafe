document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("fixedNav");
    var navName = document.getElementById("nav-name");
    var navLogo = document.getElementById("logo");
    var navLinks = document.getElementById("page-links");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = "#3B2929";
        navbar.style.height = "80px";
        navLogo.style.width = "53px";
        navLogo.style.height = "53px";
        navLogo.style.left = "50px";
        navName.style.fontSize = "30px";
        navName.style.left = "40px";
        navLinks.style.bottom = "5px";
        navLinks.style.float = "null";
      } 
      else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.height = "100px";
        navLogo.style.width = "63px";
        navLogo.style.height = "63px";
        navLogo.style.left = "0px";
        navName.style.fontSize = "35px";
        navName.style.left = "0px";
        navLinks.style.bottom = "0px";
      }
    });
  });

  let image = document.getElementById('main-tarp');;
  let images = ['Media/main-spread1.jpg','Media/main-spread2.jpg','Media/main-spread3.jpg']
  
  setInterval(function(){
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random]}, 5000)