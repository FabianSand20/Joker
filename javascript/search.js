// import { fetchJoke } from './api.js';

// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// const resultsContainer = document.getElementById('results-container');

// export function performSearch() {
//   const searchTerm = searchInput.value;
//   resultsContainer.innerHTML = '';

//   fetchJoke(`https://icanhazdadjoke.com/search?term=${searchTerm}`)
//     .then(data => {
//       const jokes = data.results;
//       if (jokes.length > 0) {
//         jokes.forEach(joke => {
//           const jokeElement = document.createElement('p');
//           jokeElement.textContent = joke.joke;
//           resultsContainer.appendChild(jokeElement);
//         });
//       } else {
//         const message = document.createElement('p');
//         message.textContent = 'No se encontraron chistes para el término de búsqueda.';
//         resultsContainer.appendChild(message);
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       const message = document.createElement('p');
//       message.textContent = 'Ocurrió un error al buscar chistes. Por favor, intenta de nuevo más tarde.';
//       resultsContainer.appendChild(message);
//     });
// }