function getTypeTwo(j, result){
    return /*html*/ `
            <div class="poke-card ${result[j].types[0].type.name}" onclick="showFullCard(${j})">
                <div class="card-head">
                    <h2>${result[j].name}</h2>
                    <p>#${result[j].id}</p>
                </div>
                <div class="pokemon-types">
                    <p class="pokemon-type ${result[j].types[0].type.name}">${result[j].types[0].type.name}</p>
                    <p class="pokemon-type">${result[j].types[1].type.name}</p>
                </div>
                <img src="${result[j].sprites.other.home.front_default}" alt="image of ${result[j].name}">
            </div>
        `;
}


function getNoTypeTwo(j, result){
    return /*html*/ `
            <div class="poke-card ${result[j].types[0].type.name}" onclick="showFullCard(${j})">
                <div class="card-head">
                    <h2>${result[j].name}</h2>
                    <p>#${result[j].id}</p>
                </div>
                <div class="pokemon-types">
                    <p class="pokemon-type ${result[j].types[0].type.name}">${result[j].types[0].type.name}</p>
                </div>
                <img src="${result[j].sprites.other.home.front_default}" alt="image of ${result[j].name}">
            </div>
        `;
}