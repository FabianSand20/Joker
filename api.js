// // Cuadro random de Chistes

// const button = document.querySelector(".container button");
// const jokeDiv = document.querySelector(".container .joke p");

// document.addEventListener("DOMContentLoaded", getJock);

// button.addEventListener("click", getJock);

// async function getJock() {
//   const jokeData = await fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json"
//     }
//   });
//   const jokeObj = await jokeData.json();
//   jokeDiv.innerHTML = jokeObj.joke;
//   console.log(jokeData);
// }

// // Search

// function searchJokes() {
//   const searchTerm = document.getElementById("search-input").value;
//   const resultsContainer = document.getElementById("results-container");

//   // Limpiar los resultados anteriores

//   resultsContainer.innerHTML = "";

//   // Realizar la búsqueda de chistes utilizando la API

//   fetch("https://icanhazdadjoke.com/search?term=" + searchTerm, {
//     headers: {
//       Accept: "application/json"
//     }
//   })
//     .then(response => response.json())
//     .then(data => {

//       // Mostrar los chistes encontrados en el contenedor de resultados

//       const jokes = data.results;
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

// // Asociar la función de búsqueda al botón de búsqueda

// document.getElementById("search-button").addEventListener("click", searchJokes);