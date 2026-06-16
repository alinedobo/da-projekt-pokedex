const initialPokemon = [];
let offsetVar = 0;
let currentPokemon = [];

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
        initialPokemon.push(singlePokemonData);
    }

    renderCards(initialPokemon);
}
//#endregion Get Data

//#region Initial Rendering
function renderCards() {
    renderPokemonSummary(initialPokemon);
    hideLoadingScreen();
    hideMiniLoadingScreen();
    enableLoadMoreButton();
}


function renderPokemonSummary(array) {
    const cardWrapperRef = document.getElementById("card-wrapper");
    cardWrapperRef.innerHTML = "";

    for (let j = 0; j < array.length; j++) {
        if (array[j].types.length > 1) {
            cardWrapperRef.innerHTML += getTypeTwo(array, j);
        } else {
            cardWrapperRef.innerHTML += getNoTypeTwo(array, j);
        }
    }
}
//#endregion Initial Rendering

//#region Full Card
const dialogRef = document.getElementById("dialog-popup");


function showFullCard(array, j) {
    console.log("show full card is triggered");
    dialogRef.showModal();

    const pokemonSummaryRef = document.getElementById("pokemon-summary");
    if (array[j].types.length > 1) {
        pokemonSummaryRef.innerHTML = getPokemonSummaryTypeTwo(array, j);
    } else {
        pokemonSummaryRef.innerHTML = getPokemonSummaryNoTypeTwo(array, j);
    }

    const pokemonStatsRef = document.getElementById("pokemon-stats");
    pokemonStatsRef.innerHTML = getPokemonStats(array, j);

    const pokemonSliderRef = document.getElementById("pokemon-slider");
    pokemonSliderRef.innerHTML = getPokemonSlider(array, j);

    openTab(event, "About");
}


function getAbilities(array, j) {
    const pokemonAbilities = [];
    for (let i = 0; i < array[j].abilities.length; i++) {
        let pokemonAbility = array[j].abilities[i].ability.name;
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


function goToPreviousCard(array, j) {
    if (j === 0) {
        showFullCard(array, array.length - 1);
    } else {
        showFullCard(array, j - 1);
    }
}


function goToNextCard(array, j) {
    if (j === array.length - 1) {
        showFullCard(array, 0);
    } else {
        showFullCard(array, j + 1);
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

    if(inputLength === 0){
        document.getElementById("more-letters").style.visibility = "hidden";
    } else if(inputLength > 0 && inputLength < MIN_CHARS){
        console.log("needs more letters");
        searchButtonRef.disabled = true;
        document.getElementById("more-letters").style.visibility = "visible";
    } else{
        searchButtonRef.disabled = false;
        document.getElementById("more-letters").style.visibility = "hidden";
    }
});


function filterPokemon(){
    currentPokemon = initialPokemon.filter(isNameIncluded);
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