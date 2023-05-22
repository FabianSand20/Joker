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
