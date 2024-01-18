document.addEventListener("DOMContentLoaded", function () {
  // Item category toggling
  let items = document.getElementById('beverages').getElementsByTagName('img');
  let labels = document.getElementById('beverages').getElementsByTagName('h4');
  const imageSources = [[{source: 'Media/cold-brew.jpg', label:'COLD BREW', price: 5, description:''},
                        {source:'Media/americano.png', label:'AMERICANO', price: 5, description:''},
                        {source:'Media/Espresso.png', label:'ESPRESSO', price: 3, description:''},
                        {source:'Media/choco.png', label:'HOT CHOCO', price: 7, description:''},
                        {source:'Media/cappuccino.png', label:'CAPPUCCINO', price: 7, description:''},
                        {source:'Media/Latte.jpg', label:'LATTE', price: 6, description:''},
                        {source:'Media/mocha.png', label:'CAFE MOCHA', price: 6, description:''},
                        {source:'Media/matcha.png', label:'MATCHA', price: 7, description:''},
                        {source:'Media/affogato.png', label:'AFFOGATO', price: 7, description:''},
                        {source:'Media/macchiato.png', label:'MACCHIATO', price: 7, description:''},
                        {source:'Media/black.png', label:'LONG BLACK', price: 5, description:''},
                        {source:'Media/caramel.png', label:'CARAMEL', price: 6, description:''}],
                        [{source:'Media/blackTea.webp', label:'BLACK TEA', price: 5, description:''},
                        {source:'Media/greenTea.png', label:'GREEN TEA', price: 3, description:''},
                        {source:'Media/matchaTea.jpg', label:'MATCHA TEA', price: 7, description:''},
                        {source:'Media/yellowTea.webp', label:'YELLOW TEA', price: 4, description:''},
                        {source:'Media/jasmineTea.jpg', label:'JASMINE TEA', price: 4, description:''},
                        {source:'Media/peppermintTea.png', label:'PEPPERMINT TEA', price: 5, description:''},
                        {source:'Media/oolongTea.jpg', label:'OOLONG TEA', price: 6, description:''},
                        {source:'Media/chaiTea.jpg', label:'CHAI TEA', price: 5, description:''},
                        {source:'Media/gingerTea.png', label:'GINGER TEA', price: 3, description:''},
                        {source:'Media/redTea.png', label:'RED TEA', price: 5, description:''},
                        {source:'Media/lemonTea.png', label:'LEMON TEA', price: 4, description:''},
                        {source:'Media/hibiscusTea.png', label:'HIBISCUS TEA', price: 7, description:''}],
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

      // Amount toggle
      let amount = document.getElementById('amount');
      let totalText = document.getElementById('total');
      var count = 1;
      let currentPrice = currentItem.price;
      var total = currentItem.price;

      // Drink Sizes Percentage
      let chosenSize = document.getElementsByName('size');
      totalText.textContent = `Total: ${total.toFixed(2)} USD`;
  

      chosenSize.forEach((radio) => {
        radio.onclick = () => {
          if(radio.value === 'medium'){
            currentPrice = currentItem.price * 1.3;
          }
          else if(radio.value === 'large'){
            currentPrice = currentItem.price * 1.6;
          }
          else{
            currentPrice = currentItem.price;
          }
          total = currentPrice * count;
          totalText.textContent = `Total: ${total.toFixed(2)} USD`;
        }
      })

      document.querySelector('#minus').addEventListener('click', () => {
        if(count > 1){
          count--;
          amount.value = `Amount: ${count}`;
          total = currentPrice * count;
          totalText.textContent = `Total: ${total.toFixed(2)} USD`;
        }
      });
      document.querySelector('#plus').addEventListener('click', () => {
        if(count < 20){
          count++;
          amount.value = `Amount: ${count}`;
          total = currentPrice * count;
          totalText.textContent = `Total: ${total.toFixed(2)} USD`;
        }
      });

      document.querySelector('.order').style.display = 'block';
      let bg = document.querySelector('.container')
      bg.style.webkitFilter = "brightness(40%)";
      document.querySelector('.footer').style.webkitFilter = "brightness(40%)";
      

      document.querySelector('#return').onclick = function(){
        document.querySelector('.order').style.display = 'none';
        document.querySelector('.container').style.webkitFilter = "brightness(100%)";
        document.querySelector('.footer').style.webkitFilter = "brightness(100%)";
      }
    }
  }); 
});