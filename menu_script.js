document.addEventListener("DOMContentLoaded", function () {
  // Item category toggling
  let items = document.getElementById('beverages').getElementsByTagName('img');
  let labels = document.getElementById('beverages').getElementsByTagName('h4');
  const imageSources = [{coldBrew:'Media/cold-brew.jpg', americano:'Media/americano.png', espresso:'Media/Espresso.png', choco:'Media/choco.png',
                         cappuccino:'Media/cappuccino.png', latte:'Media/Latte.jpg', mocha:'Media/mocha.png', matcha:'Media/matcha.png',
                         affogato:'Media/affogato.png', macchiato:'Media/macchiato.png', black:'Media/black.png', caramel:'Media/caramel.png'},
                        {blackTea:'Media/blackTea.webp', greenTea:'Media/greenTea.png', matchaTea:'Media/matchaTea.jpg', yellowTea:'Media/yellowTea.webp',
                        jasmineTea:'Media/jasmineTea.jpg', peppermintTea:'Media/peppermintTea.png', oolongTea:'Media/oolongTea.jpg', chaiTea:'Media/chaiTea.jpg',
                        gingerTea:'Media/gingerTea.png', redTea:'Media/redTea.png', lemonTea:'Media/lemonTea.png', hibiscusTea:'Media/hibiscusTea.png'},
                        [], [], [], [], [], [], []]
  
  const itemLabels = [['COLD BREW', 'AMERICANO', 'ESPRESSO', 'HOT CHOCO',
                       'CAPPUCCINO', 'LATTE', 'CAFE MOCHA', 'MATCHA',
                       'AFFOGATO', 'MACCHIATO', 'LONG BLACK', 'CARAMEL'],
                      ['BLACK TEA', 'GREEN TEA', 'MATCHA TEA', 'YELLOW TEA',
                       'JASMINE TEA', 'PEPPERMINT', 'OOLONG TEA', 'CHAI TEA',
                       'GINGER TEA', 'RED TEA', 'LEMON TEA', 'HIBISCUS TEA'],
                      [], [], [], [], [], [], []]

  document.querySelectorAll('.category').forEach(function(category){
    category.onclick = function() {
      for (let i = 0; i < items.length; i++){
        let current = imageSources[category.dataset.index]
        let val = Object.values(current)
        items[i].src = val[i];
        labels[i].textContent = itemLabels[category.dataset.index][i];
      }
    }
  });

  // Ordering Transaction Div - display and hide UI function
  document.querySelectorAll('.items').forEach(image => {
    image.onclick = () =>{

      let currentImage = document.querySelector('#current_image');
      currentImage.src = image.src;
      let itemName = document.querySelector('.trans').getElementsByTagName('h1')

      document.querySelector('.order').style.display = 'block';
      document.querySelector('body').style.height = '100%';
      document.querySelector('body').style.overflowY = 'hidden';
      let bg = document.querySelector('.container')
      bg.style.webkitFilter = "blur(3px)";
      

      document.querySelector('#return').onclick = function(){
        document.querySelector('body').style.overflowY = 'scroll';
        document.querySelector('.order').style.display = 'none';
        document.querySelector('.container').style.webkitFilter = "blur(0px)";
      }
    }
  }) 
});