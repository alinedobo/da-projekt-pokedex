function init() {
    getPokemonData();
}

async function getPokemonData() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
    const responseFromJson = await response.json();
    const resultArray = objectToArray(responseFromJson);

    renderCards(resultArray);
}


function objectToArray(obj) {
    return Array.from(Object.entries(obj));
}


function renderCards(resultArray) {
    const cardWrapperRef = document.getElementById("card-wrapper");
    cardWrapperRef.innerHTML = "";


    for (let i = 0; i < resultArray.length; i++) {
        let pokemonName = resultArray[3][1][i].name;
        
        //let pokemonRank = 
        //let pokemonSprite = 
        //let pokemonTypeOne = 
        // let pokemonTypeTwo = 

        cardWrapperRef.innerHTML += /*html*/ `
        <div class="poke-card">
            <div class="card-head">
                <p>${pokemonName}</p>
            </div>
            <div class="card-body">
                <div class="pokemon-type">
            </div>
        </div>
    `;
    }
}

