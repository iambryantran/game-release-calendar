var searchbarEl = document.getElementById('searchbar');
var sortBtnEL = document.getElementById('sortBtn');
var filterBtnEl = document.getElementById('filterBtn');
var recentSearchEl = document.getElementById('recently-searched');


const APIKey = 'qzvy2pmwgpsruc8hr85h8hj1o7ymr3';
var queryURL;
var baseURL = 'https://api.igdb.com/v4';

// Local Storage Arrays for Calendar, Countdown, and Recent Search
var recentArr = JSON.parse(localStorage.getItem("localSearchList")) || [];
var countdownArr = JSON.parse(localStorage.getItem("localCountdownList")) || [];
var calendarArr = JSON.parse(localStorage.getItem("localCalendarList")) || [];

function calendarAdd(){
    // Game is added to local storage
};

function countdownAdd(){
    // Game is added to local storage
};

searchbarEl.addEventListener('click', search);
function search(){
    // Takes input from search bar
    // Modifies URL parameters for IGDB
    // Saves input as a string to a recently searched local storage list
    // Runs results()
};

function displayRecents() {
    // Takes recently searched list from local storage
    recentArr = JSON.parse(localStorage.getItem("localSearchList"))
    // Appends the list items to the div
    // Displays the list on the page
};

recentSearchEl.addEventListener('click', recentSearch);
var srcEl = recentArr;

for (var i = 0; i < srcEl.length; i++) {
    var recentStuff = srcEl[i];

    var customSearch = document.createElement('li');
    customSearch.textContent = recentStuff.title;
    customSearch.setAttribute('class', 'game-title')
    recentSearchEl.appendChild(customSearch);
}
function recentSearch() {
    // Takes event.target
    // Uses string from recently searched local storage list
    // Modifies the URL parameters for IGDB
    // Runs search()
};

// Event listener on recently searched
function recentRemove() {
    // Removes item
};

// Event listener on home button
function goHome() {
    // Goes back to index.html
};