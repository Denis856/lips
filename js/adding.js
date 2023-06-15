var basketIcon = document.querySelector('.header__loc2');
var close = document.querySelector('.basket__close');
var basket = document.querySelector('.basket');
var count = document.querySelector('.header__loc2 span');
var buy = document.querySelector('.basket__btn');
var items1 = document.querySelector('.basket__items');
var result = document.querySelector('.result');
var close01 = document.querySelector('.result__close');
var body = document.querySelector('body');

basketIcon.onclick = () => {
   basket.classList.add('active');
   body.classList.add('active');
};
close.onclick = () => {
   basket.classList.remove('active');
   result.classList.remove('active');
   body.classList.remove('active');
};

// Adding

var btn_all = document.querySelectorAll('.item1__push02');
var block01 = document.querySelector('.basket__items');


btn_all.forEach(item =>{
   item.addEventListener('click', (e)=> {
      count.classList.add('active');
      buy.classList.add('active');

		var parent = e.target.closest('.item1');
      var block = document.createElement('div');
      block.classList.add('basket__item');

      var img = document.createElement('img');
      img.classList.add('item3__img');
      img.setAttribute('src',parent.querySelector('.item1__img').currentSrc);

      var title = document.createElement('p');
      title.classList.add('item3__title');
      title.innerText = parent.querySelector('.item1__title').innerText;
      var price = document.createElement('p');
      price.classList.add('item3__price');
      price.innerText = parent.querySelector('.item1__price span').innerText;

      
      var btn = document.createElement('button');
      btn.classList.add('item3__del');
      btn.textContent = 'del';

      var btn_add = document.createElement('button');
      btn_add.classList.add('btn_add');
      btn_add.classList.add('basket__put');
      btn_add.textContent = 'Add';

      block01.appendChild(block);
      block.appendChild(img);
      block.appendChild(title);
      block.appendChild(price);
      block.appendChild(btn);
      
      updatetotal();
      
      btn.addEventListener('click', ()=> {
         block01.removeChild(block);
         block.removeChild(img);
         block.removeChild(title);
         block.removeChild(price);
         block.removeChild(btn);
         updatetotal();
      });

      
      buy.onclick = () => {
         items1.innerHTML = '';
         count.innerHTML = '';
         count.classList.remove('active');
         document.getElementsByClassName('basket__result')[0].innerText = '$' + 0;
         buy.classList.remove('active');
         result.classList.add('active');
         body.classList.remove('active');
      };
      
      close01.onclick = () => {
         result.classList.remove('active');
         basket.classList.remove('active');
         // document.getElementsByClassName('basket__result')[0].innerText ='$0';
         // buy.classList.remove('active');
         // count.innerHTML = '';
         // count.classList.remove('active');
         // basket.classList.remove('active');
         // body.classList.remove('active');
      };
   });
});

function updatetotal(){
   var cartContent = document.getElementsByClassName('basket__items')[0];
   var carboxes = cartContent.getElementsByClassName('basket__item');
   var result_n = document.querySelector('.result .result__price');
   count.innerHTML = carboxes.length;
   if (carboxes.length == 0) {
      count.innerHTML = '';
      count.classList.remove('active');
      buy.classList.remove('active');
      result_n.innerText = '';
      document.getElementsByClassName('basket__result')[0].innerText = '$' + 0;
      // btn_cls.onclick = () =>{
      //    result.classList.remove('active');
      //    document.getElementsByClassName('basket__result')[0].innerText ='$0';
      //    buy.classList.remove('active');
      //    count.innerHTML = '';
      //    count.classList.remove('active');
      //    body.classList.remove('active');
      // };
   }
   var total = 0;
   for(var i = 0; i < carboxes.length; i++){
      var cartBox = carboxes[i];
      var priceElem = cartBox.getElementsByClassName('item3__price')[0];
      var price = parseFloat(priceElem.innerText.replace("$", ""));
      total = total + price;
   }
      // if price has some cents

      document.getElementsByClassName('basket__result')[0].innerText = '$' + total;
      result_n.innerText = '$' + total;
}