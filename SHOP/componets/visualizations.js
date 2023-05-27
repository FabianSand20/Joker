import {productChange} from './more-products.js';
import { colorChange } from './colors.js';

const image = document.querySelector('#main-img');
const joke = document.querySelector('#main-joke');
let state = {
  color: 'white',
  product: 'shirt'
}; 

function handleProductChange(product) {
  image.setAttribute('src', `img/product-${product}-${state.color}.jpg`);
  state.product = product;
}

function handleColorChange(color) {
  joke.classList.remove(`with-${state.color}-img`);
  image.setAttribute('src', `img/product-${state.product}-${color}.jpg`);
  joke.classList.add(`with-${color}-img`);
  state.color = color;
}

function initvisualizations() {
  productChange.subscribe(handleProductChange);
  colorChange.subscribe(handleColorChange);
}

export {
  initvisualizations
}
