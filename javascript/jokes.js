import { fetchRandomJoke, searchJokesByTerm } from "./api.js";

export async function getJoke() {
  const jokeDiv = document.querySelector(".container .joke p");
  const joke = await fetchRandomJoke();
  jokeDiv.innerHTML = joke;

    
  const jokeContainer2 = document.getElementById("main-joke")
  jokeContainer2.innerHTML = joke;

  const jokeContainer3 = document.getElementById("selected-joke3")
  jokeContainer3.innerHTML = joke;

}
