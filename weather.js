let weatherIcon = document.querySelector(".weather-icon");
let humidityValue = document.querySelector(".humidty");
let windSpeedValue = document.querySelector(".wind");
let temperatureValue = document.querySelector(".temp");
let locationValue = document.querySelector(".city");
let arrowRightButton = document.querySelector(".arrow-btn");
let arrowLeftButton = document.querySelector(".prev-btn");

let locations = {
    "Hyderabad": {
        cardSrc: "https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/full_Cloudy_medium_rain-1024.png",
        temp: "22°C",
        humidty: "50%",
        wind: "15Km/h"
    },
    "Rajasthan": {
        cardSrc: "https://th.bing.com/th/id/R.1e936fb298403d433b9831edb3b106b9?rik=Wjbt5gJd2xg40Q&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fsun-with-transparent-background%2fsun-with-transparent-background-20.png&ehk=yrmVQI624CWIh64pXelfY5RK2fWw9uk7NivXVeiVjyg%3d&risl=&pid=ImgRaw&r=0",
        temp: "35°C",
        humidty: "70%",
        wind: "10Km/h"
    },
    // Add more locations here
    "Mumbai": {
        cardSrc: "https://cdn2.iconfinder.com/data/icons/forecast-2/100/rain_and_sun-512.png",
        temp: "28°C",
        humidty: "60%",
        wind: "12Km/h"
    }
};

let currentLocation = "Hyderabad";

function updateWeather(location) {
    weatherIcon.src = locations[location].cardSrc;
    temperatureValue.innerHTML = locations[location].temp;
    locationValue.innerHTML = location;
    humidityValue.innerHTML = locations[location].humidty;
    windSpeedValue.innerHTML = locations[location].wind;
}

arrowRightButton.addEventListener('click', function() {
    let locationsArray = Object.keys(locations);
    let currentIndex = locationsArray.indexOf(currentLocation);
    let nextIndex = (currentIndex + 1) % locationsArray.length;
    currentLocation = locationsArray[nextIndex];

    updateWeather(currentLocation);
});

arrowLeftButton.addEventListener('click', function() {
    let locationsArray = Object.keys(locations);
    let currentIndex = locationsArray.indexOf(currentLocation);
    let prevIndex = (currentIndex - 1 + locationsArray.length) % locationsArray.length;
    currentLocation = locationsArray[prevIndex];

    updateWeather(currentLocation);
});
