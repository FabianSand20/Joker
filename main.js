import { getJoke } from './javascript/jokes.js';
import { performSearch } from './javascript/search.js';

// const button = document.querySelector(".container button");
// const jokeDiv = document.querySelector(".container .joke p");
//document.addEventListener("DOMContentLoaded", getJoke());
// button.addEventListener("click", alert("hola"));
// document.getElementById("RandoJokeBtn").addEventListener("click", alert("hola"));
// document.getElementById("search-button").addEventListener("click", alert("adios"));


const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

button.addEventListener("click", function () {
  // jokeDiv.style.color = "blue";
  getJoke();
});


document.getElementById("search-button").addEventListener("click", function () {
  console.log("hola")
  const searchTerm = document.getElementById("search-input").value;
  const resultsContainer = document.getElementById('results-container');
  if (searchTerm.trim() !== "") {
    console.log("if")
    performSearch(searchTerm);
  } else {
    resultsContainer.textContent = "Por favor, ingresa un término de búsqueda válido.";
  }

});

// const searchButton = document.querySelector(".search-button");
// const searchInput = document.querySelector(".search-input");
// const resultsContainer = document.getElementById('results-container');

// searchButton.addEventListener("click", function () {
//   // jokeDiv.style.color = "blue";
//   console("hola");
// });


// const searchButton = document.querySelector(".search-button");
// const searchInput = document.querySelector(".search-input");
// const resultsContainer = document.getElementById('results-container');

// searchButton.addEventListener("click", function () { console.log("hola")
//   const searchTerm = searchInput.value;
//   if (searchTerm.trim() !== "") {
  

//     performSearch(searchTerm);
//   } else {
//     resultsContainer.textContent = "Por favor, ingresa un término de búsqueda válido.";
//   }
// });

// function performSearch(searchTerm) {
//   const apiUrl = `https://icanhazdadjoke.com/search?term=${encodeURIComponent(searchTerm)}`;
  
//   fetch(apiUrl, {
//     headers: {
//       Accept: "application/json"
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.results && data.results.length > 0) {
//         const randomIndex = Math.floor(Math.random() * data.results.length);
//         resultsContainer.textContent = data.results[randomIndex].joke;
//       } else {
//         resultsContainer.textContent = "No se encontraron chistes con ese término de búsqueda.";
//       }
//     })
//     .catch(error => {
//       resultsContainer.textContent = "Error al obtener los chistes. Por favor, intenta de nuevo más tarde.";
//     });
// }

// document.addEventListener('DOMContentLoaded', displayRandomJoke);

// const button = document.querySelector('.container button');
// button.addEventListener('click', displayRandomJoke);

// const searchButton = document.getElementById('search-button');
// searchButton.addEventListener('click', performSearch);