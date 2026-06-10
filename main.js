console.log("pokepoke");

function init() {
    getPokemon();
}

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
            <button class="tablinks" onclick="openTab(event, 'About')">About</button>
            <button class="tablinks" onclick="openTab(event, 'Stats')">Stats</button>
        </div>

        <!-- Tab content -->
        <div id="About" class="tabcontent">
            <h3>About</h3>
        </div>
        <div id="Stats" class="tabcontent">
            <h3>Stats</h3>
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


function openTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
} 