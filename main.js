console.log("pokepoke");

function init() {
    getPokemon();
}

const result = [];
let currentPokemon = [];

//#region Get Data
async function getPokemon() {
    let response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0",
    );
    let responseFromJson = await response.json();

    for (let i = 0; i < responseFromJson.results.length; i++) {
        let response = await fetch(responseFromJson.results[i].url);
        let singlePokemonData = await response.json();
        result.push(singlePokemonData);
    }

    renderCards(result);
}
//#endregion Get Data

//#region Initial Rendering
function renderCards(result) {
    renderPokemonSummary(result);
}

function renderPokemonSummary(result) {
    const cardWrapperRef = document.getElementById("card-wrapper");
    cardWrapperRef.innerHTML = "";

    for (let j = 0; j < result.length; j++) {
        if (result[j].types.length > 1) {
            cardWrapperRef.innerHTML += getTypeTwo(j, result);
        } else {
            cardWrapperRef.innerHTML += getNoTypeTwo(j, result);
        }
    }
}
//#endregion Initial Rendering

//#region Full Card
const dialogRef = document.getElementById("dialog-popup");

function showFullCard(j) {
    dialogRef.showModal();

    const pokemonSummaryRef = document.getElementById("pokemon-summary");
    if (result[j].types.length > 1) {
        pokemonSummaryRef.innerHTML = getPokemonSummaryTypeTwo(j, result);
    } else {
        pokemonSummaryRef.innerHTML = getPokemonSummaryNoTypeTwo(j, result);
    }

    const pokemonStatsRef = document.getElementById("pokemon-stats");
    pokemonStatsRef.innerHTML = getPokemonStats(result, j);

    const pokemonSliderRef = document.getElementById("pokemon-slider");
    pokemonSliderRef.innerHTML = getPokemonSlider(result, j);

    openTab(event, "About");
}

function getAbilities(result, j) {
    const pokemonAbilities = [];
    for (let i = 0; i < result[j].abilities.length; i++) {
        let pokemonAbility = result[j].abilities[i].ability.name;
        pokemonAbilities.push(pokemonAbility);
    }
    console.log(pokemonAbilities);
    stringResult = pokemonAbilities.join(", ", pokemonAbilities);
    return stringResult;
}

function openTab(evt, tabName) {
    // Declare all variables
    let tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    /* evt.currentTarget.className += " active"; */
}
//#endregion Full Card

function closeDialog() {
    dialogRef.close();
}

//#region Move between Cards
function goToPreviousCard(result, j) {
    console.log("goToPreviousCard function triggered");
    console.log(result.length);

    if (j === 0) {
        showFullCard(result.length - 1);
    } else {
        showFullCard(j - 1);
    }
}
//#endregion Move between Cards

//#region Search for Pokemon - does not work yet
function checkSearchInput(){
    const searchInputRef = document.getElementById("search-bar-input");
    let searchInput = searchInputRef.value;

    searchInputRef.addEventListener("keydown", function(event){
        console.log("onChange function triggered");
        if(searchInput.length > 1){
            searchInput = searchInputRef.value;
            console.log(searchInput);
        }
    });

}


/* function filterPokemon(pokemonName){
    for (let i = 0; i < result.length; i++){
        if(result[i].name.includes(pokemonName)){
            currentPokemon.push(result[i].name);
            console.log(currentPokemon);
        }
    }
    renderPokemonSummary(currentPokemon);
} */
//#endregion Search for Pokemon - does not work yet