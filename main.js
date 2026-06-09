console.log("pokepoke");

function init(){
    getPokemon();
}

const result = [];

async function getPokemon() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    let responseFromJson = await response.json();

    for (let i = 0; i < responseFromJson.results.length; i++){
        let response = await fetch(responseFromJson.results[i].url);
        let singlePokemonData = await response.json();
        result.push(singlePokemonData);
    }

    renderCards(result);
}


function renderCards(result) {
    const cardWrapperRef = document.getElementById("card-wrapper");
    cardWrapperRef.innerHTML = "";
    
    for (let j = 0; j < result.length; j++){
        let pokemonName = result[j].name;
        let pokemonRank = result[j].id;
        let pokemonSprite = result[j].sprites.back_default;
        let pokemonTypeOne = result[j].types[0].type.name;

        if(result[j].types[1].type.name === 'undefined'){
            console.log("type 2 undefined");
            cardWrapperRef.innerHTML += getNoTypeTwo(pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne);

        } else{
            console.log("type 2 exists")
            let pokemonTypeTwo = result[j].types[1].type.name;
            cardWrapperRef.innerHTML += getTypeTwo(pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne, pokemonTypeTwo);
        }
    }
}


function getTypeTwo(pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne, pokemonTypeTwo){
    return /*html*/ `
            <div class="poke-card">
                <div class="card-head">
                    <p>${pokemonName}</p>
                    <p>${pokemonRank}</p>
                </div>
                <div class="card-body">
                    <div class="pokemon-type">
                        <p>${pokemonTypeOne}</p>
                        <p>${pokemonTypeTwo}</p>
                    </div>
                    <img src="${pokemonSprite}" alt="">
                </div>
            </div>
        `;
}


function getNoTypeTwo(pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne){
    return /*html*/ `
            <div class="poke-card">
                <div class="card-head">
                    <p>${pokemonName}</p>
                    <p>${pokemonRank}</p>
                </div>
                <div class="card-body">
                    <div class="pokemon-type">
                        <p>${pokemonTypeOne}</p>
                    </div>
                    <img src="${pokemonSprite}" alt="">
                </div>
            </div>
        `;
}