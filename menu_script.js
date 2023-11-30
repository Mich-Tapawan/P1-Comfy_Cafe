document.addEventListener("DOMContentLoaded", function () {
    // Top nav
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

    // Item category selection

    // collect all the items and store in an array
    // create a 2D list of sources for the different image categories imageSources = [categoryNum][looping through every string]
    // create a loop that changes the image sources and h4 tag texts for each item

    //let i = 0
    // for (item in items){
    //    item.style.image.src = imageSources[cat][i]
    //    i++
    //     }
    let items = document.getElementsByClassName(items);
    const imageSources = [['Media/cold-brew.jpg', 'Media/americano.png', 'Media/Espresso.png', 'Media/choco.png',
                           'Media/cappuccino.png', 'Media/Latte.jpg', 'Media/mocha.png"', 'Media/matcha.png',
                           'Media/affogato.png', 'Media/macchiato.png', 'Media/black.png', 'Media/caramel.png'],
                          ['Media/'], [], [], [], [], [], [], []]
    function changeCategory(category){
      if ( category == "coffee"){
        
      }
    }

    document.getElementById("coffee").addEventListener("click",changeCategory("coffee"))
  });

  let image = document.getElementById('main-tarp');;
  let images = ['Media/main-spread1.jpg','Media/main-spread2.jpg','Media/main-spread3.jpg']
  
  setInterval(function(){
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random]}, 5000)