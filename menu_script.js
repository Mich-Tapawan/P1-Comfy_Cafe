document.addEventListener("DOMContentLoaded", function () {
  // Item category toggling
  let items = document.getElementById('beverages').getElementsByTagName('img');
  let labels = document.getElementById('beverages').getElementsByTagName('h4');
  const imageSources = [[coldBrew = {source: 'Media/cold-brew.jpg', label:'COLD BREW', description:''},
                        americano = {source:'Media/americano.png', label:'AMERICANO', description:''},
                        espresso = {source:'Media/Espresso.png', label:'ESPRESSO', description:''},
                        choco = {source:'Media/choco.png', label:'HOT CHOCO', description:''},
                        cappuccino = {source:'Media/cappuccino.png', label:'CAPPUCCINO', description:''},
                        latte = {source:'Media/Latte.jpg', label:'LATTE', description:''},
                        mocha = {source:'Media/mocha.png', label:'CAFE MOCHA', description:''},
                        matcha = {source:'Media/matcha.png', label:'MATCHA', description:''},
                        affogato = {source:'Media/affogato.png', label:'AFFOGATO', description:''},
                        macchiato = {source:'Media/macchiato.png', label:'MACCHIATO', description:''},
                        black = {source:'Media/black.png', label:'LONG BLACK', description:''},
                        caramel = {source:'Media/caramel.png', label:'CARAMEL', description:''}],
                        [blackTea = {source:'Media/blackTea.webp', label:'BLACK TEA', description:''},
                        greenTea = {source:'Media/greenTea.png', label:'GREEN TEA', description:''},
                        matchaTea = {source:'Media/matchaTea.jpg', label:'MATCHA TEA', description:''},
                        yellowTea = {source:'Media/yellowTea.webp', label:'YELLOW TEA', description:''},
                        jasmineTea = {source:'Media/jasmineTea.jpg', label:'JASMINE TEA', description:''},
                        peppermintTea = {source:'Media/peppermintTea.png', label:'PEPPERMINT TEA', description:''},
                        oolongTea = {source:'Media/oolongTea.jpg', label:'OOLONG TEA', description:''},
                        chaiTea = {source:'Media/chaiTea.jpg', label:'CHAI TEA', description:''},
                        gingerTea = {source:'Media/gingerTea.png', label:'GINGER TEA', description:''},
                        redTea = {source:'Media/redTea.png', label:'RED TEA', description:''},
                        lemonTea = {source:'Media/lemonTea.png', label:'LEMON TEA', description:''},
                        hibiscusTea = {source:'Media/hibiscusTea.png', label:'HIBISCUS TEA', description:''}],
                        [], [], [], [], [], [], []]

  document.querySelectorAll('.category').forEach(function(category){
    category.onclick = function() {
      for (let i = 0; i < items.length; i++){
        let item = imageSources[category.dataset.index][i];
        items[i].src = item['source'];
        labels[i].textContent = item['label'];
      }
    }
  });

  // Ordering Transaction Div - display and hide UI function
  document.querySelectorAll('.items').forEach(image => {
    image.onclick = () =>{

      let currentImage = document.querySelector('#current_image');
      let selectedImage = image.querySelector('img');
      currentImage.src = selectedImage.src;
      let itemName = document.querySelector('.trans').querySelector('h1');
      let selectedName = image.querySelector('h4');
      itemName.textContent = selectedName.textContent;

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