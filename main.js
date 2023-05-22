import { getJoke } from './javascript/jokes.js';
// import { performSearch } from './javascript/search.js';

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
  
  

// document.addEventListener('DOMContentLoaded', displayRandomJoke);

// const button = document.querySelector('.container button');
// button.addEventListener('click', displayRandomJoke);

// const searchButton = document.getElementById('search-button');
// searchButton.addEventListener('click', performSearch);