// app.js

import { initializeProducts } from './components/other-products.js';
import { initializeVisualizer } from './components/visualizer.js';
import { initializeDetails } from './components/details.js';
import { initializeColors } from './components/colors.js';
import {getJokeByID } from "../javascript/api.js";
import { getJoke } from '../javascript/jokes.js';
import { performSearch } from '../javascript/search.js';

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

  const jokeContainer1 = document.getElementById("main-joke")
  jokeContainer1.innerHTML = joke;

  const jokeContainer2 = document.getElementById("selected-joke2")
  jokeContainer2.innerHTML = joke;

  const jokeContainer3 = document.getElementById("selected-joke3")
  jokeContainer3.innerHTML = joke;
}


//
const button = document.querySelector(".container button");

button.addEventListener("click", function () {
  getJoke();
});

