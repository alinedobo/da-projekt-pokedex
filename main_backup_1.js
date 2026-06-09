console.log("pokepoke");

async function getPokemonNames() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",);
    const responseFromJson = await response.json();

    console.log(responseFromJson);
    console.log(responseFromJson.results[0].name);

    renderCards(responseFromJson);
}

getPokemonNames();


function renderCards(arr) {

    console.log(arr.results[0].name + " 2");

    const cardWrapperRef = document.getElementById("card-wrapper");

    cardWrapperRef.innerHTML = "";
    cardWrapperRef.innerHTML = /*html*/ `
        <div class="poke-card">
            <p>${arr.results[0].name}</p>
            <img src="${arr.results[0].url}" alt="">
        </div>
    `;
}


function init(){
    renderCards();
}