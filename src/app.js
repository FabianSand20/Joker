// app.js

import { initializeProducts } from './components/other-products.js';
import { initializeVisualizer } from './components/visualizer.js';
import { initializeDetails } from './components/details.js';
import { initializeColors } from './components/colors.js';
import {getJokeByID } from "../javascript/api.js";

initializeVisualizer();
initializeDetails();
initializeProducts();
initializeColors();


document.addEventListener( "DOMContentLoaded", functionCall());
// function functionCall() {
//    alert( "function call on the page load." );
// }

export async function functionCall() {
  //GET THE ID FROM THE URL PARAMETER
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id= urlParams.get('id')

  const joke = await getJokeByID(id);

  const jokeContainer = document.querySelector('.joke-push');
  jokeContainer.innerHTML = joke;
  console.log(joke);
}