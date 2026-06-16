const fetchedPokemon = [];
let offsetVar = 0;
let workingPokemon = fetchedPokemon;

function init() {
    disableLoadMoreButton();
    showLoadingScreen();
    getPokemon();
}


//#region Get Data
async function getPokemon(offset) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offsetVar}`);
    let responseFromJson = await response.json();

    for (let i = 0; i < responseFromJson.results.length; i++) {
        let response = await fetch(responseFromJson.results[i].url);
        let singlePokemonData = await response.json();
        fetchedPokemon.push(singlePokemonData);
    }

    renderCards();
}

function reloadPokemon(){
    workingPokemon = fetchedPokemon;
    renderPokemonSummary(workingPokemon);
    document.getElementById("load-more-button").style.visibility = "visible";
}
//#endregion Get Data

//#region Initial Rendering
function renderCards() {
    renderPokemonSummary(workingPokemon);
    hideLoadingScreen();
    hideMiniLoadingScreen();
    enableLoadMoreButton();
}


function renderPokemonSummary() {
    const cardWrapperRef = document.getElementById("card-wrapper");
    cardWrapperRef.innerHTML = "";

    for (let j = 0; j < workingPokemon.length; j++) {
        if (workingPokemon[j].types.length > 1) {
            cardWrapperRef.innerHTML += getTypeTwo(j);
        } else {
            cardWrapperRef.innerHTML += getNoTypeTwo(j);
        }
    }
}
//#endregion Initial Rendering

//#region Full Card
const dialogRef = document.getElementById("dialog-popup");


function showFullCard(j) {
    dialogRef.showModal();

    const pokemonSummaryRef = document.getElementById("pokemon-summary");
    if (workingPokemon[j].types.length > 1) {
        pokemonSummaryRef.innerHTML = getPokemonSummaryTypeTwo(j);
    } else {
        pokemonSummaryRef.innerHTML = getPokemonSummaryNoTypeTwo(j);
    }

    const pokemonStatsRef = document.getElementById("pokemon-stats");
    pokemonStatsRef.innerHTML = getPokemonStats(j);

    const pokemonSliderRef = document.getElementById("pokemon-slider");
    pokemonSliderRef.innerHTML = getPokemonSlider(j);

    openTab(event, "About");
}


function getAbilities(j) {
    const pokemonAbilities = [];
    for (let i = 0; i < workingPokemon[j].abilities.length; i++) {
        let pokemonAbility = workingPokemon[j].abilities[i].ability.name;
        pokemonAbilities.push(pokemonAbility);
    }
    stringResult = pokemonAbilities.join(", ", pokemonAbilities);
    return stringResult;
}


function openTab(evt, tabName) {
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
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
        showFullCard(workingPokemon.length - 1);
    } else {
        showFullCard( j - 1);
    }
}


function goToNextCard(j) {
    if (j === workingPokemon.length - 1) {
        showFullCard(0);
    } else {
        showFullCard(j + 1);
    }
}
//#endregion Full Card

//#region Search for Pokemon
const searchBarInputRef = document.getElementById("search-bar-input");
const searchButtonRef = document.getElementById("search-button");
const MIN_CHARS = 3;
let searchInput = searchBarInputRef.value;

searchBarInputRef.addEventListener("input", () => {
    const inputLength = searchBarInputRef.value.trim().length;

    if(inputLength === 0){
        document.getElementById("more-letters").style.visibility = "hidden";
    } else if(inputLength > 0 && inputLength < MIN_CHARS){
        searchButtonRef.disabled = true;
        document.getElementById("more-letters").style.visibility = "visible";
    } else{
        searchButtonRef.disabled = false;
        document.getElementById("more-letters").style.visibility = "hidden";
    }
});


function filterPokemon(){
    workingPokemon = fetchedPokemon.filter(isNameIncluded);
    if(workingPokemon.length < 1 || workingPokemon == undefined){
        openErrorMessage();
    } else{
        renderPokemonSummary(workingPokemon);
        document.getElementById("load-more-button").style.visibility = "hidden";
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
    showMiniLoadingScreen();
    disableLoadMoreButton();
    offsetVar = (offsetVar + 30);
    getPokemon(offsetVar);
}
//#endregion Load more Cards

//#region Loader & Button
function showLoadingScreen(){
    document.querySelector("#loading-screen").style.visibility = "visible";
}


function hideLoadingScreen(){
    document.querySelector("#loading-screen").style.visibility = "hidden";
}


function showMiniLoadingScreen(){
    document.querySelector("#mini-loading-screen").style.display = "initial";
}

function hideMiniLoadingScreen(){
    document.querySelector("#mini-loading-screen").style.display = "none";
}


function disableLoadMoreButton(){
    document.getElementById("load-more-button").disabled = true;
}


function enableLoadMoreButton(){
    document.getElementById("load-more-button").disabled = false;
} 
//#endregion Loader