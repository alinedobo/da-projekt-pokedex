function init(){
    renderCards();
}

async function getPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/",);
    const responseFromJson = await response.json();

    console.log(responseFromJson);
    console.log(responseFromJson.name);

    renderCards(responseFromJson);
}

getPokemon();


function renderCards(arr) {
    const cardWrapperRef = document.getElementById("card-wrapper");
    const pokemonName = arr.name;
    const pokemonRank = arr.id;
    const pokemonSprite = arr.sprites.back_default;
    const pokemonTypeOne = arr.types[0].type.name;
    const pokemonTypeTwo = arr.types[1].type.name;

    console.log("pokemon name is " + pokemonName)

    cardWrapperRef.innerHTML = "";
    cardWrapperRef.innerHTML = /*html*/ `
        <div class="poke-card">
            <p>${pokemonName}</p>
            <img src="${pokemonSprite}" alt="">
            <p>${pokemonTypeOne}</p>
            <p>${pokemonTypeTwo}</p>
            <p>${pokemonRank}</p>
        </div>
    `;
}


