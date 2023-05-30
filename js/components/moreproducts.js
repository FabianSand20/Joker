// more-products.js

import publisher from '../publisher.js';
import settings from '../settings.js';
const wrap = document.querySelector('#moreproducts-wrap');

const productChange= new publisher();

function handleProductChange(event) {
  productChange.publish(event.currentTarget,dataset.productid);

}

function renderProducts(){
  const html=''
  const product= Object.keys(settings);
  product.shift()
  product.forEach((prod) => {
    const btn= document.createElement('button')
    btn.classList.add('product__btn');
    btn.dataset.productid= prod;
    btn.addEventListener('click', handleProductChange);
    btn.innerHTML =`<img src="img/store/product-${prod}-white.jpg" alt="">`;
    wrap.appendChild(btn)
  });

}

export {
  renderProducts,
  productChange,
}