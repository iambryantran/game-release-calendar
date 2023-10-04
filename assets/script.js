var currentDateEl = document.getElementById('currentDate');
var searchbarEl = document.getElementById('searchbar');
var sortBtnEL = document.getElementById('sortBtn');
var filterBtnEl = document.getElementById('filterBtn');
var countdownListEl = document.getElementById('countdown');
var calendarEl = document.getElementById('calendar');
var searchBtnEl = document.getElementById('searchBtn');

const accessToken = 'qzvy2pmwgpsruc8hr85h8hj1o7ymr3';
const clientID = 'iaqgas3gz2bncz00iuz5uxlb1ygybp';
var queryURL;
var baseURL = 'https://api.igdb.com/v4/';

// fetch('https://api.igdb.com/v4/games', {
//     method: 'POST',
//     headers: {
//         "Client-ID": clientID,
//         "Authorization": "Bearer " + accessToken
//     }
// })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     });

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

searchBtnEl.addEventListener('click', search);
function search(event) {
    event.preventDefault();
    var searchedObj = document.querySelector('#searchbar').value;
    console.log(searchedObj);
    var obj = {
        title: searchedObj,
    }
    recentArr.push(obj);
    localStorage.setItem("localSearchList", JSON.stringify(recentArr));
    window.location.replace('./results.html');
    // Takes input from search bar
    // var searchTerm = searchbarEl.value;
    // Modifies URL parameters for IGDB
    // console.log(searchTerm);
    // queryURL = baseURL + ;//search parameters;

    // Saves input as a string to a recently searched local storage list
    // recentArr.push(searchTerm);
    // console.log(recentArr);
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

const localUrl = 'http://localhost:3001/api';

    const deployedUrl = 'https://shielded-tundra-06273-a31f4de96ab9.herokuapp.com/api';

    const fetchData = async () => {
        var url = "https://api.igdb.com/v4/games";
        var bodyContent =
        "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;";

        try {
        const response = await fetch(deployedUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            url: url,
            bodyContent: bodyContent,
            }),
        });

        const data = await response.json();
        console.log(data);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    fetchData();