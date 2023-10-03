var currentDateEl = document.getElementById('currentDate');
var searchbarEl = document.getElementById('searchbar');
var sortBtnEL = document.getElementById('sortBtn');
var filterBtnEl = document.getElementById('filterBtn');
var countdownListEl = document.getElementById('countdown');
var calendarEl = document.getElementById('calendar');

const accessToken = 'qzvy2pmwgpsruc8hr85h8hj1o7ymr3';
const clientID = 'iaqgas3gz2bncz00iuz5uxlb1ygybp';
var queryURL;
var baseURL = 'https://api.igdb.com/v4/';

fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
        "Client-ID": clientID,
        "Authorization": "Bearer " + accessToken
    }
})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });

// Local Storage Arrays for Calendar, Countdown, and Recent Search
var recentArr = JSON.parse(localStorage.getItem("localSearchList")) || [];
var countdownArr = JSON.parse(localStorage.getItem("localCountdownList")) || [];
var calendarArr = JSON.parse(localStorage.getItem("localCalendarList")) || [];

// GIVEN: I load the website I see the title, current date, search bar, countdown list, and calendar with my added games
// WHEN: I click a filter by genre, date, or platform
// THEN: The search results only displays those results
// WHEN: I search for a game using the search bar
// THEN: Then the second page loads with the search results and the recently searched section is updated
// WHEN: I hit the add to calendar button on the results cards
// THEN: The card is added to the corresponding date on the calendar
// WHEN: I hit the add to countdown button on the results cards
// THEN: The result is added to my countdown list
// WHEN: I click on a recently searched result
// THEN: The page immediately shows those results
// WHEN: I click the X on the recently searched
// THEN: It removes that result from the list
// WHEN: I click the Calendar Button
// THEN: The page goes back to the home page
// WHEN: I click the remove from calendar button
// THEN: The result is removed from my calendar 
// WHEN: I click the remove from countdown button
// THEN: The result is removed from my countdown 

searchbarEl.addEventListener('click', search);
function search() {
    // Takes input from search bar
    // Modifies URL parameters for IGDB
    // Saves input as a string to a recently searched local storage list
    // Runs results()
};

function filter(){
    // Modifies URL parameters for IGDB
    // Runs results()
};

function results() {
    // Uses modified URL to search IGDB
    // Loads results.html
    // Displays results
};

// CALENDAR BLOCK
function displayCalendar() {
    // Loads in list of saved games from local storage
    // Displays it on the page
};

function calendarRemove() {

};

// COUNTDOWN BLOCK
function displayCountdown() {

};

function countdown() {
    var currentDate = dayjs();
    // releaseDate = 
    // var daysDiff = releaseDate - currentDate orrrrr the other way around?

    // Update textcontent with daysDiff
};

function countdownRemove() {

};