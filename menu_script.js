document.addEventListener("DOMContentLoaded", function () {
  // Item category toggling
  let items = document.getElementById('beverages').getElementsByTagName('img');
  let labels = document.getElementById('beverages').getElementsByTagName('h4');
  const imageSources = [[{source: 'Media/cold-brew.jpg', label:'COLD BREW', price: '', description:''},
                        {source:'Media/americano.png', label:'AMERICANO', price: '', description:''},
                        {source:'Media/Espresso.png', label:'ESPRESSO', price: '', description:''},
                        {source:'Media/choco.png', label:'HOT CHOCO', price: '', description:''},
                        {source:'Media/cappuccino.png', label:'CAPPUCCINO', price: '', description:''},
                        {source:'Media/Latte.jpg', label:'LATTE', price: '', description:''},
                        {source:'Media/mocha.png', label:'CAFE MOCHA', price: '', description:''},
                        {source:'Media/matcha.png', label:'MATCHA', price: '', description:''},
                        {source:'Media/affogato.png', label:'AFFOGATO', price: '', description:''},
                        {source:'Media/macchiato.png', label:'MACCHIATO', price: '', description:''},
                        {source:'Media/black.png', label:'LONG BLACK', price: '', description:''},
                        {source:'Media/caramel.png', label:'CARAMEL', price: '', description:''}],
                        [{source:'Media/blackTea.webp', label:'BLACK TEA', price: '', description:''},
                        {source:'Media/greenTea.png', label:'GREEN TEA', price: '', description:''},
                        {source:'Media/matchaTea.jpg', label:'MATCHA TEA', price: '', description:''},
                        {source:'Media/yellowTea.webp', label:'YELLOW TEA', price: '', description:''},
                        {source:'Media/jasmineTea.jpg', label:'JASMINE TEA', price: '', description:''},
                        {source:'Media/peppermintTea.png', label:'PEPPERMINT TEA', price: '', description:''},
                        {source:'Media/oolongTea.jpg', label:'OOLONG TEA', price: '', description:''},
                        {source:'Media/chaiTea.jpg', label:'CHAI TEA', price: '', description:''},
                        {source:'Media/gingerTea.png', label:'GINGER TEA', price: '', description:''},
                        {source:'Media/redTea.png', label:'RED TEA', price: '', description:''},
                        {source:'Media/lemonTea.png', label:'LEMON TEA', price: '', description:''},
                        {source:'Media/hibiscusTea.png', label:'HIBISCUS TEA', price: '', description:''}],
                        [], [], [], [], [], [], []]

  let categoryIndex = 0;
  document.querySelectorAll('.category').forEach(function(category){
    category.onclick = function() {
      for (let i = 0; i < items.length; i++){
        let item = imageSources[category.dataset.index][i];
        categoryIndex = category.dataset.index;
        items[i].src = item['source'];
        labels[i].textContent = item['label'];
      }
    }
  });

  // Ordering Transaction Div - display and hide UI function
  document.querySelectorAll('.items').forEach(image => {
    image.onclick = () =>{

      let currentItem = imageSources[categoryIndex][image.dataset.itemNum];
      let imagePlaceholder = document.querySelector('#current_image');
      let textPlaceholder = document.querySelector('.trans').querySelector('h1');
      imagePlaceholder.src = currentItem.source;
      textPlaceholder.textContent = currentItem.label;

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