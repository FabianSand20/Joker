import { productChange } from './other-products.js';
import productPrices from '../config.js';
import { colorChange } from './colors.js';

const title = document.querySelector('#title');
const price = document.querySelector('#price');
const selectedJoke = document.querySelector('#selected-joke');
let state = {
  color: 'white',
  product: 'shirt',
};

function handleProductChange(product) {
  title.innerHTML = `${state.color} ${product} with joke`;
  price.innerHTML = `${productPrices[product][state.color]}`;
  state.product = product;
}

function handleColorChange(color) {
  title.innerHTML = `${color} ${state.product} with joke`;
  price.innerHTML = `${productPrices[state.product][color]}`;
  state.color = color;
}

function initializeDetails() {
  productChange.subscribe(handleProductChange);
  colorChange.subscribe(handleColorChange);
}

export {
  initializeDetails
};
