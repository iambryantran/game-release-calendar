var currentDateEl = document.getElementById('currentDate');
var searchbarEl = document.getElementById('searchbar');
var sortBtnEL = document.getElementById('sortBtn');
var filterBtnEl = document.getElementById('filterBtn');
var countdownListEl = document.getElementById('countdown');
var calendarEl = document.getElementById('calendar');


searchbarEl.addEventListener('click', search);

function search (){
    // Takes input from search bar
    // Modifies URL parameters for IGDB
    // Saves input as a string to a recently searched local storage list
    // Runs results()
};

function filter () {
    // Modifies URL parameters for IGDB
    // Runs results()
};

function results (){
    // Uses modified URL to search IGDB
    // Loads results.html
    // Displays results
};

function displayCalendar () {
    // Loads in list of saved games from local storage
    // Displays it on the page
};

function calendarRemove() {
    
};

function countdownRemove () {

};