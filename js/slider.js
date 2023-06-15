
var productContainers = [...document.querySelectorAll('.customer__items')];
var nxtBtn = [...document.querySelectorAll('.customer__left')];
var preBtn = [...document.querySelectorAll('.customer__right')];
var item20 = document.querySelectorAll('.customer__item')[0];

productContainers.forEach((item, i) => {
   let containerWidth = item20.clientWidth + 50;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});