const filterItem = document.querySelector('.products__nav1');
const filterItem2 = document.querySelector('.products__nav2');
const filterImage = document.querySelectorAll('.products__item');
const filterImage2 = document.querySelectorAll('.products__item2');

window.onload = () => { // once window loaded 
   filterItem.onclick = (selectedItem) => { // when user clicked on filterItem
      if(selectedItem.target.classList.contains('products__btn')) { // if user click element has class .item
         filterItem.querySelector('.active').classList.remove('active'); // remove the class active which is the first element
         selectedItem.target.classList.add('active'); // add that active class on the user element or item
         let filterName = selectedItem.target.getAttribute('data-name'); // getting data-name value of the user selected and scrolling in a filterName variable
         filterImage.forEach((image) => {
            let filterImages = image.getAttribute('data-name'); // getting image data-name value
            // if user selected item data-name value is equal to image data-name value
            // or selected item data-name value is equal to 'all'
            if((filterImages == filterName) || filterName == 'all') {
               image.classList.remove('hide');
               image.classList.add('show');
            } else {
               image.classList.add('hide');
               image.classList.remove('show');
            }
         });
      }
   }
   filterItem2.onclick = (selectedItem) => { // when user clicked on filterItem
      if(selectedItem.target.classList.contains('products__btn')) { // if user click element has class .item
         filterItem2.querySelector('.active').classList.remove('active'); // remove the class active which is the first element
         selectedItem.target.classList.add('active'); // add that active class on the user element or item
         let filterName = selectedItem.target.getAttribute('data-name'); // getting data-name value of the user selected and scrolling in a filterName variable
         filterImage2.forEach((image) => {
            let filterImages = image.getAttribute('data-name'); // getting image data-name value
            // if user selected item data-name value is equal to image data-name value
            // or selected item data-name value is equal to 'all'
            if((filterImages == filterName) || filterName == 'all2') {
               image.classList.remove('hide');
               image.classList.add('show');
            } else {
               image.classList.add('hide');
               image.classList.remove('show');
            }
         });
      }
   }
}