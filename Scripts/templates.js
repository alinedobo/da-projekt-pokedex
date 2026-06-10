function getTypeTwo(pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne, pokemonTypeTwo){
    return /*html*/ `
            <div class="poke-card">
                <div class="card-head">
                    <h2>${pokemonName}</h2>
                    <p>#${pokemonRank}</p>
                </div>
                <div class="card-body">
                    <div class="pokemon-types">
                        <p class="pokemon-type">${pokemonTypeOne}</p>
                        <p class="pokemon-type">${pokemonTypeTwo}</p>
                    </div>
                    <img src="${pokemonSprite}" alt="image of ${pokemonName}">
                </div>
            </div>
        `;
}


function getNoTypeTwo(pokemonName, pokemonRank, pokemonSprite, pokemonTypeOne){
    return /*html*/ `
            <div class="poke-card">
                <div class="card-head">
                    <h2>${pokemonName}</h2>
                    <p>#${pokemonRank}</p>
                </div>
                <div class="card-body">
                    <div class="pokemon-types">
                        <p class="pokemon-type">${pokemonTypeOne}</p>
                    </div>
                    <img src="${pokemonSprite}" alt="image of ${pokemonName}">
                </div>
            </div>
        `;
}