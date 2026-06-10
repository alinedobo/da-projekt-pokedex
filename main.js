console.log("pokepoke");

function init() {
    getPokemon();
}

const result = [];

async function getPokemon() {
    let response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0",
    );
    let responseFromJson = await response.json();

    for (let i = 0; i < responseFromJson.results.length; i++) {
        let response = await fetch(responseFromJson.results[i].url);
        let singlePokemonData = await response.json();
        result.push(singlePokemonData);
    }

    renderCards(result);
}

function renderCards(result) {
    renderPokemonSummary(result);
}

function renderPokemonSummary(result) {
    const cardWrapperRef = document.getElementById("card-wrapper");
    cardWrapperRef.innerHTML = "";

    for (let j = 0; j < result.length; j++) {
        if (result[j].types.length > 1) {
            let pokemonTypeTwo = result[j].types[1].type.name;
            cardWrapperRef.innerHTML += getTypeTwo(j, result);
        } else {
            cardWrapperRef.innerHTML += getNoTypeTwo(j, result);
        }
    }
}


function showFullCard(j) {
    const dialogRef = document.getElementById("dialog-popup");
    dialogRef.showModal();

    const pokemonSummaryRef = document.getElementById("pokemon-summary");
    if (result[j].types.length > 1) {
        pokemonSummaryRef.innerHTML = getTypeTwo(j, result);
    } else {
        pokemonSummaryRef.innerHTML = getNoTypeTwo(j, result);
    }
}
