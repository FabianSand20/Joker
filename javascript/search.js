import { searchJokesByTerm } from './api.js';


export async function performSearch(searchTerm) {
  const searchButton = document.getElementById('search-button');
  const resultsContainer = document.getElementById('results-container');

  const jokeDiv = document.querySelector(".container .joke p");
  const resultsJoke = await searchJokesByTerm(searchTerm);


  if (resultsJoke.length > 0) {
    resultsJoke.forEach(joke => {
      const jokeElement = document.createElement('a');
      var link = document.createTextNode("This is link");
      jokeElement.href="http://127.0.0.1:5500/Shop.html?id="+joke.id
      jokeElement.textContent = joke.joke;
      jokeElement.id = joke.id
      resultsContainer.appendChild(jokeElement);
    });
  } else {
    const message = document.createElement('p');
    message.textContent = 'No se encontraron chistes para el término de búsqueda.';
    resultsContainer.appendChild(message);
  }
  console.log(resultsJoke);
}
