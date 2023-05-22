import { searchJokesByTerm } from './api.js';


export async function performSearch(searchTerm) {
  const searchButton = document.getElementById('search-button');
  // const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results-container');
  // const searchTerm = searchInput.value;

  const jokeDiv = document.querySelector(".container .joke p");
  const resultsJoke = await searchJokesByTerm(searchTerm);

  // jokeDiv.innerHTML = joke;

  if (resultsJoke.length > 0) {
    resultsJoke.forEach(joke => {
      const jokeElement = document.createElement('a');
      var link = document.createTextNode("This is link");
      jokeElement.href="https://stackoverflow.com/questions/4772774/how-do-i-create-a-link-using-javascript"
      jokeElement.textContent = joke.joke;
      resultsContainer.appendChild(jokeElement);
    });
  } else {
    const message = document.createElement('p');
    message.textContent = 'No se encontraron chistes para el término de búsqueda.';
    resultsContainer.appendChild(message);
  }
  console.log(resultsJoke);
}




// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// const resultsContainer = document.getElementById('results-container');

// export function performSearch() {
//   const resultsJokes = await searchJokesByTerm();

//   console.log("function")
//   const searchTerm = searchInput.value;
//   resultsContainer.innerHTML = '';


//   await searchJokesByTerm(`https://icanhazdadjoke.com/search?term=${searchTerm}`)
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