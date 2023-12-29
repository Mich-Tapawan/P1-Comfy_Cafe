document.addEventListener("DOMContentLoaded", function () {
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
  
  document.querySelectorAll('.category').forEach(function(category){
    category.onclick = function() {
      for (let i = 0; i < items.length; i++){
        items[i].src = imageSources[category.dataset.index][i];
        labels[i].textContent = itemLabels[category.dataset.index][i];
      }
    }
  })

  if (document.querySelector('.order').style.display !== 'none'){
    document.querySelector('body').style.height = '100%';
    document.querySelector('body').style.overflowY = 'hidden';
    let bg = document.querySelector('.container')
    bg.style.webkitFilter = "blur(3px)";
  }

  document.querySelector('#return').onclick = function(){
    document.querySelector('body').style.overflowY = 'scroll';
    document.querySelector('.order').style.display = 'none';
    document.querySelector('.container').style.webkitFilter = "blur(0px)";
  }
});