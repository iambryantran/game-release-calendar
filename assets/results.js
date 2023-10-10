var searchbarEl = document.getElementById('searchbar');
var searchFormEl = document.getElementById('search-form')
var sortBtnEL = document.getElementById('sortBtn');
var filterBtnEl = document.getElementById('filterBtn');
var recentSearchEl = document.getElementById('recently-searched');
var searchResult = document.getElementById('results');
var containerEl = document.getElementById('results-shown');
var gameNames = document.getElementById('game-name');
var clearEl = document.getElementById('clear-history');
var homeBtnEl = document.getElementById('homeBtn');
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var otherModal = document.getElementById('otherModal');

const APIKey = 'qzvy2pmwgpsruc8hr85h8hj1o7ymr3';
var queryURL;
var baseURL = 'https://api.igdb.com/v4';

const localUrl = 'http://localhost:3001/api';
const deployedUrl = 'https://shielded-tundra-06273-a31f4de96ab9.herokuapp.com/api';

// Fetch Data from API
const fetchData = async (searchInput) => {
    const searchQuery = encodeURIComponent(searchInput);
    const fields = 'name,genres.name,artworks.url,cover.url,first_release_date,release_dates,platforms.name,summary';
    const url = `https://api.igdb.com/v4/games/`;

    const urlForFetch = `${deployedUrl}?url=${url}&searchQuery=${searchQuery}&fields=${fields}`;

    console.log(urlForFetch);

    try {
        const response = await fetch(urlForFetch, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        });

        const data = await response.json();
        console.log(data); // Display search on screen
        displayResult (data);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Sort/Filter 
sortBtnEL.onclick = function () {
    otherModal.style.display = "block";
}

filterBtnEl.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
    otherModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    } else if (event.target == otherModal) {
        otherModal.style.display = "none";
    }
}

// Search
searchFormEl.addEventListener('submit', search);

function search(event){
    console.log('hit')
    event.preventDefault();
    var searchedObj = document.querySelector('#searchbar').value;
    console.log(searchedObj);
    var obj = {
        title: searchedObj,
    }
    recentArr.push(obj);
    localStorage.setItem("localSearchList", JSON.stringify(recentArr));
    var customSearch = document.createElement('li');
    customSearch.textContent = obj.title;
    customSearch.setAttribute('class', 'game-title nes-input')
    recentSearchEl.appendChild(customSearch);
    // Takes input from search bar
    // Modifies URL parameters for IGDB
    // Saves input as a string to a recently searched local storage list
    // Runs results()
    fetchData(searchedObj);
};

// Local Storage Arrays for Calendar, Countdown, and Recent Search
var recentArr = JSON.parse(localStorage.getItem("localSearchList")) || [];
var countdownArr = JSON.parse(localStorage.getItem("localCountdownList")) || [];
var calendarArr = JSON.parse(localStorage.getItem("localCalendarList")) || [];
var eventArr = JSON.parse(localStorage.getItem('savedDate')) || [];

// Displays today's date
function updateDate() {

    // Updates the current day
    var currentDay = dayjs().format('dddd, MMMM D');
    $('#currentDate').text(currentDay);

};
updateDate();

var displayResult = function (game, titleName) {
    // Game is added to local storage
    if (game.length === 0) {
        gameNames.textContent = 'No results found.';
        return;  
    }

    containerEl.innerHTML = '';

    gameNames.textContent = titleName;

    for (var i  = 0; i < game.length; i++) {
        var objName = game[i].name;
        var objGenre = game[i].genres[0].name;

        var resultEl = document.createElement('div');
        resultEl.setAttribute('class','nes-input game-Sav countdown-card d-flex flex-sm-column flex-justify-between p-1 color-border-accent-emphasis color-bg-accent-emphasis color-fg-on-emphasis') 
        var date = new Date(game[i].first_release_date * 1000);
        var formattedDate = date.toISOString().slice(0, 10);
        console.log(formattedDate);
        var info = `${JSON.stringify({title: encodeURIComponent(objName), start: formattedDate })}`
        console.log(info)

        var html = `
        <div class="d-flex">
            <img class="col-2" src='https:${game[i].cover.url}' alt='Cover image of ${objName}' />
            <div class="col-10 p-4">
                <h3>${objName}<h3>
                <p>${objGenre}</p>
                <p>${formattedDate}</p>
                <button data-info=${info} class="nes-btn is-warning">add to calendar</button>
            </div>
        </div>
        `

        resultEl.innerHTML = html;
        

        containerEl.appendChild(resultEl);
    }
};


$('#results-shown').on('click', '.nes-btn', function() {
    var obj = $(this).attr('data-info');

    console.log(obj);
    console.log(JSON.parse(obj));
    var val = JSON.parse(obj);
    val.title = decodeURIComponent(val.title);

    eventArr.push(val);

    localStorage.setItem('savedDate', JSON.stringify(eventArr));

});

function calAdd () {
    
}

function reFresh(){
    containerEl = '';
    // Game is added to local storage
};

function displayRecents() {
    // Takes recently searched list from local storage
    recentArr = JSON.parse(localStorage.getItem("localSearchList"))
    // Appends the list items to the div
    // Displays the list on the page
};

var srcEl = recentArr;

for (var i = 0; i < srcEl.length; i++) {
    var recentStuff = srcEl[i];
    
    var customSearch = document.createElement('li');
    customSearch.textContent = recentStuff.title;
    customSearch.setAttribute('class', 'game-title nes-input')
    recentSearchEl.appendChild(customSearch);
}
function clearHis() {
    localStorage.clear();
    recentSearchEl.textContent='';
};

clearEl.addEventListener('click', clearHis);
// Event listener on recently searched
function recentRemove() {
    // Removes item
};

// Event listener on home button
homeBtnEl.addEventListener('click', goHome)
function goHome() {
    location.replace('index.html')
    // Goes back to index.html
};

function getParamsAndSearch() {
    var queryString = window.location.search;
    var urlSearchParams = new URLSearchParams(queryString);

    var query = urlSearchParams.get('q');

    if(!query) return;
    console.log(query);

    // search using query
    fetchData(query);
    // add to localStorage
};
getParamsAndSearch();

