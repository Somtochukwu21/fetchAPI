
async function fetchPokemon() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`
    );

    const statusCode = response.status;

    if (statusCode > 299) {
      throw new Error("Request failed");
    }

    const json = await response.json();
    return json.results;
  } catch (error) {
    console.log("error ocurred");
  }
}

async function buildPokemonUi() {
  const pokemons = await fetchPokemon();

  //the html UI
  let tableRows = "";

  for (const pokemon of pokemons) {
    const urlSplit = pokemon.url.split("/");
    const id = urlSplit[urlSplit.length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${id}.png`;
    const name = pokemon.name;

    tableRows += `
        <tr>
            <td>${id}</td>
            <td><img src=${imageUrl} height='80px' width='80px'/></td>
            <td>${name}</td>
        </tr>`;
  }

  const pokemonBody = document.querySelector("#pokemons");
  pokemonBody.innerHTML = tableRows;
}

buildPokemonUi();
