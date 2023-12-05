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
  });

  // Hero section banners cycle
  let image = document.getElementById('main-tarp');;
  let images = ['Media/main-spread1.jpg','Media/main-spread2.jpg','Media/main-spread3.jpg']
  
  setInterval(function(){
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random]}, 5000)

  let items = document.getElementById('beverages').getElementsByTagName('img');
  let labels = document.getElementById('beverages').getElementsByTagName('h4');
  const imageSources = [['Media/cold-brew.jpg', 'Media/americano.png', 'Media/Espresso.png', 'Media/choco.png',
                         'Media/cappuccino.png', 'Media/Latte.jpg', 'Media/mocha.png', 'Media/matcha.png',
                         'Media/affogato.png', 'Media/macchiato.png', 'Media/black.png', 'Media/caramel.png'],
                        ['Media/blackTea.webp', 'Media/greenTea.png', 'Media/matchaTea.jpg', 'Media/yellowTea.webp',
                         'Media/jasmineTea.jpg', 'Media/', 'Media/', 'Media/',
                         'Media/', 'Media/', 'Media/', 'Media/',],
                          [], [], [], [], [], [], []]
  
  const itemLabels = [['COLD BREW', 'AMERICANO', 'ESPRESSO', 'HOT CHOCO',
                       'CAPPUCCINO', 'LATTE', 'CAFE MOCHA', 'MATCHA',
                       'AFFOGATO', 'MACCHIATO', 'LONG BLACK', 'CARAMEL'],
                      ['BLACK TEA', 'GREEN TEA', 'MATCHA TEA', 'YELLOW TEA',
                       'JASMINE TEA']]
  
  // Item category toggling
  function changeCategory(category){
    if ( category == "coffee"){
      for (let i = 0; i < items.length; i++){
        items[i].src = imageSources[0][i];
        labels[i].textContent = itemLabels[0][i];
      }
    }

    else if ( category == "tea"){
      for (let i = 0; i < items.length; i++){
        items[i].src = imageSources[1][i];
        labels[i].textContent = itemLabels[1][i];  
      }
    }
    }

  document.getElementById('coffee').addEventListener('click', function() {changeCategory('coffee');});
  document.getElementById('tea').addEventListener('click', function() {changeCategory('tea');});