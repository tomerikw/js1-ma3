const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".result");

async function getApi() {
  const response = await fetch(url);

  const results = await response.json();

  resultsContainer.innerHTML = "";

  const facts = results.results;
  for (let i = 0; i < facts.length; i++) {
    console.log(facts[i].name);
    console.log(facts[i].rating);
    console.log(facts[i].tags.length);

    if (i === 8) {
      break;
    }

    resultsContainer.innerHTML += `<div class="bigname">${facts[i].name}</div>
    <div>Rating: ${facts[i].rating}</div><div>Amount of tags: ${facts[i].tags.length}</div>`;

    console.log(results.results);
  }
}
getApi();
