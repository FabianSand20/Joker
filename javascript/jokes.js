import { fetchRandomJoke, searchJokesByTerm } from "./api.js";

export async function getJoke() {
  const jokeDiv = document.querySelector(".container .joke p");
  const joke = await fetchRandomJoke();
  jokeDiv.innerHTML = joke;
  console.log(joke);
}


// export function searchJokes() {
//   const searchTerm = document.getElementById("search-input").value;
//   const resultsContainer = document.getElementById("results-container");

//   resultsContainer.innerHTML = "";

//   searchJokesByTerm(searchTerm)
//     .then(jokes => {
//       if (jokes.length > 0) {
//         jokes.forEach(joke => {
//           const jokeElement = document.createElement("p");
//           jokeElement.textContent = joke.joke;
//           resultsContainer.appendChild(jokeElement);
//         });
//       } else {
//         const message = document.createElement("p");
//         message.textContent = "No se encontraron chistes para el término de búsqueda.";
//         resultsContainer.appendChild(message);
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       const message = document.createElement("p");
//       message.textContent = "Ocurrió un error al buscar chistes. Por favor, intenta de nuevo más tarde.";
//       resultsContainer.appendChild(message);
//     });
// }