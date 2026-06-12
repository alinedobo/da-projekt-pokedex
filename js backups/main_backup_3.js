function init(){
    getPokemon();
}

const result = [];

async function getPokemon() {
    for (let i = 1; i < 10; i++){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        let responseFromJson = await response.json();

        result.push(responseFromJson);
        console.log(result);
    }

    console.log(result.length);
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
        let pokemonTypeTwo = result[j].types[1].type.name;
        
        cardWrapperRef.innerHTML += /*html*/ `
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
}
