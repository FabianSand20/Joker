export async function fetchRandomJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });

  const data = await response.json();
  return data.joke;
}


export async function searchJokesByTerm(term) {
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${term}`, {
    headers: {
      Accept: "application/json"
    }
  });

  const data = await response.json();
  console.log("Data:")
  console.log(data)
  return data.results;
}