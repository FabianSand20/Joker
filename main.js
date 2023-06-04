import { getJoke } from './javascript/jokes.js';
import { performSearch } from './javascript/search.js';

const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

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

