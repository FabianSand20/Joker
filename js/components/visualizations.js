// visualizations.js
import { productChange } from './moreproducts.js';

const image = document.querySelector('#main-img');
const joke = document.querySelector('#main-joke');

function updateMainImg(moreproducts) {
  image.setAttribute ('src', `img/store/product-${moreproducts}shirt-white.jpg`)
}

function initvisualizations(){
productChange.subscribe(updateMainImg);
}

export{
  initvisualizations
}