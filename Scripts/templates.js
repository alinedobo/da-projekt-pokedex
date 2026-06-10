function getTypeTwo(j, pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne, pokemonTypeTwo){
    return /*html*/ `
            <div class="poke-card ${pokemonTypeOne}" onclick="showFullCard(${j})">
                <div class="card-head">
                    <h2>${pokemonName}</h2>
                    <p>#${pokemonRank}</p>
                </div>
                <div class="pokemon-types">
                    <p class="pokemon-type ${pokemonTypeOne}">${pokemonTypeOne}</p>
                    <p class="pokemon-type">${pokemonTypeTwo}</p>
                </div>
                <img src="${pokemonSprite}" alt="image of ${pokemonName}">
            </div>
        `;
}


function getNoTypeTwo(j, pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne){
    return /*html*/ `
            <div class="poke-card ${pokemonTypeOne}" onclick="showFullCard(${j})">
                <div class="card-head">
                    <h2>${pokemonName}</h2>
                    <p>#${pokemonRank}</p>
                </div>
                <div class="pokemon-types">
                    <p class="pokemon-type ${pokemonTypeOne}">${pokemonTypeOne}</p>
                </div>
                <img src="${pokemonSprite}" alt="image of ${pokemonName}">
            </div>
        `;
}