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

  const jokeContainer = document.querySelector('.joke-push');
  jokeContainer.innerHTML = joke;
  console.log(joke);
}

//
const button = document.querySelector(".container button");

button.addEventListener("click", function () {
  getJoke();
});

document.getElementById("search-button").addEventListener("click", function () {
  const searchTerm = document.getElementById("search-input").value;
  const resultsContainer = document.getElementById('results-container');
  if (searchTerm.trim() !== "") {
    performSearch(searchTerm);
  } else {
    resultsContainer.textContent = "Por favor, ingresa un término de búsqueda válido.";
  }
});

