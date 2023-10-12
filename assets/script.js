var currentDateEl = document.getElementById('currentDate');
var searchbarEl = document.getElementById('searchbar');
var sortBtnEL = document.getElementById('sortBtn');
var filterBtnEl = document.getElementById('filterBtn');
var countdownListEl = document.getElementById('countdown');
var calendarEl = document.getElementById('calendar');
var searchBtnEl = document.getElementById('searchBtn');
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var otherModal = document.getElementById('otherModal');

var eventArr = JSON.parse(localStorage.getItem('savedDate')) || [];

document.addEventListener('DOMContentLoaded', function() {
    console.log(eventArr);
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
        events: eventArr
    });
    calendar.render();
});

// Sidebar
sortBtnEL.onclick = function () {
    otherModal.style.display = "block";
}

filterBtnEl.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    otherModal.style.display = "none";
}

span2.onclick = function() {
    modal.style.display = "none"; 
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    } else if (event.target == otherModal) {
        otherModal.style.display = "none";
    }
}

// Fetch Block
const accessToken = 'qzvy2pmwgpsruc8hr85h8hj1o7ymr3';
const clientID = 'iaqgas3gz2bncz00iuz5uxlb1ygybp';
var queryURL;
var baseURL = 'https://api.igdb.com/v4/';

const localUrl = 'http://localhost:3001/api';

const deployedUrl = 'https://shielded-tundra-06273-a31f4de96ab9.herokuapp.com/api';

const fetchData = async () => {
    const searchQuery = encodeURIComponent('Super Mario');
    const fields = 'name,genres.name,artworks.url,cover.url,first_release_date,platforms.name,summary';
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
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

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

searchBtnEl.addEventListener('click', search);
function search(event) {
    event.preventDefault();
    var searchedObj = document.querySelector('#searchbar').value; // Takes value from searchbar
    window.location.replace('./results.html?q=' + searchedObj); // Adds it to our results page URL
};

function countdown() {
    var currentDate = dayjs();
};
