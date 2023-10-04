var searchbarEl = document.getElementById('searchbar');
var searchFormEl = document.getElementById('search-form')
var sortBtnEL = document.getElementById('sortBtn');
var filterBtnEl = document.getElementById('filterBtn');
var recentSearchEl = document.getElementById('recently-searched');
var clearEl = document.getElementById('clear-history');
var homeBtnEl = document.getElementById('homeBtn');


const APIKey = 'qzvy2pmwgpsruc8hr85h8hj1o7ymr3';
var queryURL;
var baseURL = 'https://api.igdb.com/v4';

// Local Storage Arrays for Calendar, Countdown, and Recent Search
var recentArr = JSON.parse(localStorage.getItem("localSearchList")) || [];
var countdownArr = JSON.parse(localStorage.getItem("localCountdownList")) || [];
var calendarArr = JSON.parse(localStorage.getItem("localCalendarList")) || [];

// Displays today's date
function updateDate() {

    // Updates the current day
    var currentDay = dayjs().format('dddd, MMMM D');
    $('#currentDate').text(currentDay);

};
updateDate();

function calendarAdd(){
    // Game is added to local storage
};

function countdownAdd(){
    // Game is added to local storage
};

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

var srcEl = recentArr;

for (var i = 0; i < srcEl.length; i++) {
    var recentStuff = srcEl[i];
    
    var customSearch = document.createElement('li');
    customSearch.textContent = recentStuff.title;
    customSearch.setAttribute('class', 'game-title')
    recentSearchEl.appendChild(customSearch);
}
function clearHis() {
    localStorage.clear();
    recentSearchEl.textContent='';
    // Takes event.target
    // Uses string from recently searched local storage list
    // Modifies the URL parameters for IGDB
    // Runs search()
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

    // add to localStorage

};

getParamsAndSearch();