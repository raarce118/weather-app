var cityFormEl = document.querySelector("#city-form");
var searchBarEl = document.querySelector("#searchBar");
var forecastContainerEl = document.querySelector("#forecast-container");
var temperatureEl = document.querySelector("#show-temperature");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var apiKey = 'a41bbe96ed348f5aea3213a8cbc2f640'

citiesStored = []

var citySubmitHandler = function(event) {
    event.preventDefault();
    var searchBar = searchBarEl.value.trim();
       
       if (searchBar) {
           getForecast(searchBar);
           searchBarEl.value = "";
       } else {
           alert("Enter a valid city name");
       };
};

var saveCitiesStored = function(event) {
    localStorage.setitem ("city", JSON.stringify(citiesStored));
    console.log(event)
    citiesStored.push(cityText);
};
var showHistory = function(saveCitiesStored) {
    saveCitiesStored = JSON.parse(localStorage.getItem(city));
}

var getForecast = function(city) {
    // * Need request to the url here
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a41bbe96ed348f5aea3213a8cbc2f640")
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {

                var {lat} = data.coord;
                var {lon} = data.coord;
     // * need lat and lon API
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=a41bbe96ed348f5aea3213a8cbc2f640`)
        .then = function(response) {
            if(response.ok) {
                response.json().then(function(data) {
      })
      }
        }
        console.log(data);
        displayForecast(data, city)
    });
} else {
    alert ("error" + response.statusText);

}
})
.catch(function(error) {
    alert("Unable to connect");
});


};


function displayForecast(fc, name, humidity, wind) {
    var fahrenheit = Math.round(((parseFloat(fc.main.temp)-273.15)*1.8)+32);
    var wind = Math.round(fc.wind.speed);
    var humidity = Math.round(fc.main.humidity);
    document.getElementById('subtitle').innerHTML = name;
    document.getElementById('show-temperature').innerHTML = fahrenheit + '&deg;';
    document.getElementById('wind').innerHTML = wind + 'mph';
    document.getElementById('humidity').innerHTML = humidity + '%';
    

};
    
cityFormEl.addEventListener("submit", citySubmitHandler);