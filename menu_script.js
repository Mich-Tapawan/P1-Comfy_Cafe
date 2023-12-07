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

  // Highlight selected category
  function highlightText(e){
    var key = e.target;
    let inactiveTexts = document.getElementById('beverages').getElementsByTagName('li');
    inactiveTexts.style.opacity = '0.5';
    key.style.opacity = '1';
  }
  
  document.getElementById('list1').addEventListener('click', highlightText);

  // Item category toggling
  let items = document.getElementById('beverages').getElementsByTagName('img');
  let labels = document.getElementById('beverages').getElementsByTagName('h4');
  const imageSources = [['Media/cold-brew.jpg', 'Media/americano.png', 'Media/Espresso.png', 'Media/choco.png',
                         'Media/cappuccino.png', 'Media/Latte.jpg', 'Media/mocha.png', 'Media/matcha.png',
                         'Media/affogato.png', 'Media/macchiato.png', 'Media/black.png', 'Media/caramel.png'],
                        ['Media/blackTea.webp', 'Media/greenTea.png', 'Media/matchaTea.jpg', 'Media/yellowTea.webp',
                         'Media/jasmineTea.jpg', 'Media/peppermintTea.png', 'Media/oolongTea.jpg', 'Media/chaiTea.jpg',
                         'Media/gingerTea.png', 'Media/redTea.png', 'Media/lemonTea.png', 'Media/hibiscusTea.png'],
                        [], [], [], [], [], [], []]
  
  const itemLabels = [['COLD BREW', 'AMERICANO', 'ESPRESSO', 'HOT CHOCO',
                       'CAPPUCCINO', 'LATTE', 'CAFE MOCHA', 'MATCHA',
                       'AFFOGATO', 'MACCHIATO', 'LONG BLACK', 'CARAMEL'],
                      ['BLACK TEA', 'GREEN TEA', 'MATCHA TEA', 'YELLOW TEA',
                       'JASMINE TEA', 'PEPPERMINT', 'OOLONG TEA', 'CHAI TEA',
                       'GINGER TEA', 'RED TEA', 'LEMON TEA', 'HIBISCUS TEA'],
                      [], [], [], [], [], [], []]
  
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