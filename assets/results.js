var searchbarEl = document.getElementById('searchbar');
var sortBtnEL = document.getElementById('sortBtn');
var filterBtnEl = document.getElementById('filterBtn');
var recentSearchEl = document.getElementById('recently-searched');


function calendarAdd{
    // Game is added to local storage
};

function countdownAdd{
    // Game is added to local storage
};

searchbarEl.addEventListener('click', search);
function search{
    // Takes input from search bar
    // Modifies URL parameters for IGDB
    // Saves input as a string to a recently searched local storage list
    // Runs results()
};

function displayRecents {
    // Takes recently searched list from local storage
    // Appends the list items to the div
    // Displays the list on the page
};

recentSearchEl.addEventListener('click', recentSearch);
function recentSearch {
    // Takes event.target
    // Uses string from recently searched local storage list
    // Modifies the URL parameters for IGDB
    // Runs search()
};

// Event listener on recently searched
function recentRemove {
    // Removes item
};

// Event listener on home button
function goHome {
    // Goes back to index.html
};