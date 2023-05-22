import { fetchRandomJoke, searchJokesByTerm } from "./api.js";

export async function getJoke() {
  const jokeDiv = document.querySelector(".container .joke p");
  const joke = await fetchRandomJoke();
  jokeDiv.innerHTML = joke;
  console.log(joke);
}
