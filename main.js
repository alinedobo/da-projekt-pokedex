function init() {
    disableLoadMoreButton();
    hideWrapperShowLoader();
    getPokemon();
}

const result = [];
let offsetVar = 0;
let currentPokemon = [];

//#region Get Data
async function getPokemon(offsetVar) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offsetVar}`);
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
    showWrapperHideLoader();
    enableLoadMoreButton();
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
    pokemonSliderRef.innerHTML = getPokemonSlider(j);

    openTab(event, "About");
}


function getAbilities(result, j) {
    const pokemonAbilities = [];
    for (let i = 0; i < result[j].abilities.length; i++) {
        let pokemonAbility = result[j].abilities[i].ability.name;
        pokemonAbilities.push(pokemonAbility);
    }
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


function closeDialog() {
    dialogRef.close();
}

dialogRef.addEventListener('click', (event) => {
    if (event.target.id === "dialog-popup") {
        dialogRef.close();
    }
});


function goToPreviousCard(j) {
    if (j === 0) {
        showFullCard(result.length - 1);
    } else {
        showFullCard(j - 1);
    }
}


function goToNextCard(j) {
    if (j === result.length - 1) {
        showFullCard(0);
    } else {
        showFullCard(j + 1);
    }
}
//#endregion Full Card

//#region Search for Pokemon
//Disable and enable search button
const searchBarInputRef = document.getElementById("search-bar-input");
const searchButtonRef = document.getElementById("search-button");
const MIN_CHARS = 3;
let searchInput = searchBarInputRef.value;
// Listen for input events (typing, pasting, etc.)
searchBarInputRef.addEventListener("input", () => {
    const inputLength = searchBarInputRef.value.trim().length;
    // Enable button if input has at least MIN_CHARS
    searchButtonRef.disabled = inputLength < MIN_CHARS;
});


function filterPokemon(){
    currentPokemon = result.filter(isNameIncluded);
    if(currentPokemon.length < 1 || currentPokemon == undefined){
        openErrorMessage();
    } else{
        renderPokemonSummary(currentPokemon);
    }
    searchBarInputRef.value = "";
}


function isNameIncluded(banane){
    searchInput = searchBarInputRef.value;
    return banane.name.includes(searchInput);
}


const errorMessageRef = document.getElementById("error-message");
function openErrorMessage(){
    errorMessageRef.showModal();
}


function closeErrorMessage(){
    errorMessageRef.close();
}
//#endregion Search for Pokemon

//#region Load more Cards
function addMorePokemon(){
    hideWrapperShowLoader();
    disableLoadMoreButton();
    offsetVar = (offsetVar + 30);
    getPokemon(offsetVar);
}
//#endregion Load more Cards

//#region Loader & Button
function hideWrapperShowLoader(){
    document.querySelector("#card-wrapper").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
}


function showWrapperHideLoader(){
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#card-wrapper").style.visibility = "visible";
}


function disableLoadMoreButton(){
    document.getElementById("load-more-button").disabled = true;
}


function enableLoadMoreButton(){
    document.getElementById("load-more-button").disabled = false;
} 
//#endregion Loader