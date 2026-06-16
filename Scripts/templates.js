function getTypeTwo(j) {
    return /*html*/ `
            <div class="poke-card-container">
                <div class="poke-card ${workingPokemon[j].types[0].type.name}" onclick="showFullCard(${j})">
                    <div class="card-head">
                        <h2>${workingPokemon[j].name}</h2>
                        <p>#${workingPokemon[j].id}</p>
                    </div>
                    <div class="pokemon-types">
                        <p class="pokemon-type ${workingPokemon[j].types[0].type.name}">${workingPokemon[j].types[0].type.name}</p>
                        <p class="pokemon-type">${workingPokemon[j].types[1].type.name}</p>
                    </div>
                    <img data-id="card-image" src="${workingPokemon[j].sprites.other.home.front_default}" alt="image of ${workingPokemon[j].name}">
                </div>
            </div>
        `;
}


function getNoTypeTwo(j) {
    return /*html*/ `
            <div class="poke-card-container">
                <div class="poke-card ${workingPokemon[j].types[0].type.name}" onclick="showFullCard(${j})">
                    <div class="card-head">
                        <h2>${workingPokemon[j].name}</h2>
                        <p>#${workingPokemon[j].id}</p>
                    </div>
                    <div class="pokemon-types">
                        <p class="pokemon-type ${workingPokemon[j].types[0].type.name}">${workingPokemon[j].types[0].type.name}</p>
                    </div>
                    <img data-id="card-image" src="${workingPokemon[j].sprites.other.home.front_default}" alt="image of ${workingPokemon[j].name}">
                </div>
            </div>
        `;
}


function getPokemonSummaryTypeTwo(j) {
    return /*html*/ `
            <div class="poke-card-container">
                <div class="poke-card ${workingPokemon[j].types[0].type.name}">
                    <div class="card-head">
                        <h2>${workingPokemon[j].name}</h2>
                        <p>#${workingPokemon[j].id}</p>
                    </div>
                    <div class="pokemon-types">
                        <p class="pokemon-type ${workingPokemon[j].types[0].type.name}">${workingPokemon[j].types[0].type.name}</p>
                        <p class="pokemon-type">${workingPokemon[j].types[1].type.name}</p>
                    </div>
                    <img data-id="card-image" src="${workingPokemon[j].sprites.other.home.front_default}" alt="image of ${workingPokemon[j].name}">
                </div>
            </div>
        `;
}


function getPokemonSummaryNoTypeTwo(j) {
    return /*html*/ `
            <div class="poke-card-container">
                <div class="poke-card ${workingPokemon[j].types[0].type.name}">
                    <div class="card-head">
                        <h2>${workingPokemon[j].name}</h2>
                        <p>#${workingPokemon[j].id}</p>
                    </div>
                    <div class="pokemon-types">
                        <p class="pokemon-type ${workingPokemon[j].types[0].type.name}">${workingPokemon[j].types[0].type.name}</p>
                    </div>
                    <img data-id="card-image" src="${workingPokemon[j].sprites.other.home.front_default}" alt="image of ${workingPokemon[j].name}">
                </div>
            </div>
        `;
}


function getPokemonStats(j) {
    return /*html*/ `
        <div class="stats-container">
            <!-- Tab links -->
            <div class="tab">
                <button data-id="card" class="tablinks" onclick="openTab(event, 'About')">ABOUT</button>
                <button data-id="card" class="tablinks" onclick="openTab(event, 'Stats')">STATS</button>
            </div>
    
            <!-- Tab content -->
            <div id="About" class="tabcontent">
                <table>
                    <tr>
                        <th>Species:</th>
                        <td class="poke-about-facts">${workingPokemon[j].species.name}</td>
                    </tr>
                    <tr>
                        <th>Weight:</th>
                        <td class="poke-about-facts">${workingPokemon[j].weight / 10}kg</td>
                    </tr>
                    <tr>
                        <th>Height:</th>
                        <td class="poke-about-facts">${workingPokemon[j].height * 10}cm</td>
                    </tr>
                    <tr>
                        <th>Abilities:</th>
                        <td class="poke-about-facts">${getAbilities(j)}</td>
                    </tr>
                </table>
            </div>
            <div id="Stats" class="tabcontent">
                <table>
                    <tr>
                        <th>HP:</th>
                        <td>${workingPokemon[j].stats[0].base_stat}/100</td>
                    </tr>
                    <tr>
                        <th>Attack:</th>
                        <td>${workingPokemon[j].stats[1].base_stat}/100</td>
                    </tr>
                    <tr>
                        <th>Defense:</th>
                        <td>${workingPokemon[j].stats[2].base_stat}/100</td>
                    </tr>
                    <tr>
                        <th>Special Attack:</th>
                        <td>${workingPokemon[j].stats[3].base_stat}/100</td>
                    </tr>
                    <tr>
                        <th>Special Defense:</th>
                        <td>${workingPokemon[j].stats[4].base_stat}/100</td>
                    </tr>
                </table>
            </div>
        </div>
    `;
}


function getPokemonSlider(array, j) {
    return /*html*/ `
        <button data-id="card" data-id="prev-button" onclick="goToPreviousCard(${array}, ${j})"><img src="./Assets/icons/Arrow-left.svg" alt="left arrow"></button>
        <button data-id="card" data-id="next-button" onclick="goToNextCard(${array}, ${j})"><img src="./Assets/icons/Arrow-Right.svg" alt="right arrow"></button>
    `;
}
