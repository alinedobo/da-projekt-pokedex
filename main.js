console.log("pokepoke");

function init() {
    getPokemon();
}


//#region Get Data
const result = [];

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
function showFullCard(j) {
    const dialogRef = document.getElementById("dialog-popup");
    dialogRef.showModal();

    const pokemonSummaryRef = document.getElementById("pokemon-summary");
    if (result[j].types.length > 1) {
        pokemonSummaryRef.innerHTML = getTypeTwo(j, result);
    } else {
        pokemonSummaryRef.innerHTML = getNoTypeTwo(j, result);
    }


    const pokemonStatsRef = document.getElementById("pokemon-stats");
    pokemonStatsRef.innerHTML = /*html*/ `
        <!-- Tab links -->
        <div class="tab">
            <button class="tablinks" onclick="openTab(event, 'About')">ABOUT</button>
            <button class="tablinks" onclick="openTab(event, 'Stats')">STATS</button>
        </div>

        <!-- Tab content -->
        <div id="About" class="tabcontent">
            <table>
                <tr>
                    <th>Species:</th>
                    <td>${result[j].species.name}</td>
                </tr>
                <tr>
                    <th>Weight:</th>
                    <td>${result[j].weight/10}kg</td>
                </tr>
                <tr>
                    <th>Height:</th>
                    <td>${result[j].height*10}cm</td>
                </tr>
                <tr>
                    <th>Abilities:</th>
                    <td>${getAbilities(result, j)}</td>
                </tr>
            </table>
        </div>
        <div id="Stats" class="tabcontent">
            <table>
                
            </table>
        </div>
    `;
    
    const pokemonSliderRef = document.getElementById("pokemon-slider");
    pokemonSliderRef.innerHTML = /*html*/ `
        <div>
            <button>PREVIOUS</button>
            <button>NEXT</button>
        </div>
    `;
}


function getAbilities(result, j){
    const pokemonAbilities = [];
    for (let i = 0; i < result[j].abilities.length; i++){
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
    evt.currentTarget.className += "active";
} 
//#endregion Full Card