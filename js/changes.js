var cards = document.querySelectorAll('.home__card');
var block = document.querySelector('.home__block');
var block_text = document.querySelector('.home__block_text');

cards.forEach(item =>{
   item.addEventListener('click', ()=> {
      var img = block.querySelector('.home__img1');
      img.setAttribute('src',item.querySelector('img').currentSrc);

      var title = block.querySelector('.home__title');
      title.innerText = item.querySelector('.card__title').innerText;

      var price = block.querySelector('.home__subtitle');
      price.innerText = item.querySelector('.card__price').innerText;

      block.appendChild(img);
   });
});