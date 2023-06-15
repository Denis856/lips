var search1 = document.querySelector('.header__loc1');

search1.onclick = () => {
   document.querySelector('.header__group').classList.toggle('active');
};

// footer

var title01 = document.querySelectorAll('.footer__title');

title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      item.classList.toggle('active');
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});

// smooth move

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}