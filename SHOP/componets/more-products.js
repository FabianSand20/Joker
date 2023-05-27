import config from '../config.js';
import publication from '../publication.js';
const wrap = document.querySelector('#more-products-wrap');

const productChange = new publication();

function handleProductChange(event) {
  productChange.publish(event.currentTarget.dataset.productid);
}

function initProducts() {
  const products = Object.keys(config);
  products.shift();
  products.forEach((prod) => {
    const btn = document.createElement('button');
    btn.classList.add('more-products__btn');
    btn.dataset.productid = prod;
    btn.addEventListener('click', handleProductChange);
    btn.innerHTML = `<img src="img/product-${prod}-white.jpg" alt="">`;
    wrap.appendChild(btn);
  });
}

export {
  initProducts,
  productChange,
}