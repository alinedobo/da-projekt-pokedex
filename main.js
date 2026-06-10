console.log("pokepoke");

function init(){
    getPokemon();
}


const result = [];


async function getPokemon() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0');
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
        let pokemonSprite = result[j].sprites.other.home.front_default;
        let pokemonTypeOne = result[j].types[0].type.name;

        if(result[j].types.length > 1){
            let pokemonTypeTwo = result[j].types[1].type.name;
            cardWrapperRef.innerHTML += getTypeTwo(j, pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne, pokemonTypeTwo);     
        } else{
            cardWrapperRef.innerHTML += getNoTypeTwo(j, pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne);
        }
    }
}


const dialogRef = document.getElementById("dialog-popup");

function showFullCard(index){
    dialogRef.showModal();
}