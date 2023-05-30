// details.js

import { productChange } from "./moreproducts.js";
import prices from "../settings.js";

const title = document.querySelector('#title');
const price = document.querySelector('#price');
const joke = document.querySelector('#selected-joke');

function handleProductChange(moreproduct) {
  title.innerHTML=`white ${moreproduct} with joke`
  price.innerHTML= `${price[moreproduct].white}`
}

function initdetails(){
  productChange.subscribe(handleProductChange);
}

export{
  initdetails
}