import productPrices from '../config.js';
import Publisher from '../Publisher.js';

const productsWrapper = document.querySelector('#other-products-wrap');
const productChange = new Publisher();

function handleProductChange(event) {
  const selectedProduct = event.currentTarget.dataset.productid;
  productChange.publish(selectedProduct);
}

function initializeProducts() {
  const products = Object.keys(productPrices);
  products.shift();
  products.forEach(product => {
    const btn = document.createElement('button');
    btn.classList.add('other-products__btn');
    btn.dataset.productid = product;
    btn.addEventListener('click', handleProductChange);
    btn.innerHTML = `<img src="img/store/product-${product}-white.jpg" alt="">`;
    productsWrapper.appendChild(btn);
  });
}

export {
  initializeProducts,
  productChange
};
